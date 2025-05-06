import React, { useEffect, useState, useContext } from 'react';
import api from '../../services/api';
import DashboardSidebar from '../../components/DashboardSidebar';
import { useMenu } from '../../navigation/menuManager';
import Pagination from '../../components/Pagination';
import { AuthContext } from '../../auth/AuthContext';
import { compressImage } from '../../utils/imageCompression';

const AdminDataLemdiklat = () => {
  const { filteredMenuItems } = useMenu('admin');
  const { user, logoutUser } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    logo: '',
    name: '',
    matra: 'Darat',
    alamat: '',
  });
  const [editingId, setEditingId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.getLemdiklatData();
      setData(response);
      setFilteredData(response);
    } catch (err) {
      setError('Gagal memuat data Lemdiklat');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm, data]);

  const openModal = (item = null) => {
    if (item) {
      setFormData(item);
      setEditingId(item.id);
    } else {
      setFormData({
        logo: '',
        name: '',
        matra: 'Darat',
        alamat: '',
      });
      setEditingId(null);
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = async (e) => {
    const { name, value, files } = e.target;
    if (name === 'logo' && files && files[0]) {
      try {
        const compressedFile = await compressImage(files[0]);
        setFormData((prev) => ({ ...prev, logo: compressedFile }));
      } catch (error) {
        setError('Gagal mengompresi gambar');
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (editingId) {
        await api.updateLemdiklat(editingId, formData);
      } else {
        await api.createLemdiklat(formData);
      }
      closeModal();
      fetchData();
    } catch (err) {
      setError('Gagal menyimpan data');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Apakah Anda yakin ingin menghapus data ini?')) return;
    setError('');
    try {
      await api.deleteLemdiklat(id);
      fetchData();
    } catch (err) {
      setError('Gagal menghapus data');
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const currentData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Profile menu state
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };
  const handleLogout = () => {
    logoutUser();
  };

  const handleChangePassword = () => {
    // Implement navigation to change password page
    // For example, using react-router's useNavigate
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <DashboardSidebar menuItems={filteredMenuItems} />
      <div className="flex-1 p-6 bg-white rounded shadow">
        {/* Profile button top right */}
        <div className="flex justify-end mb-4 relative items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            {user && user.fullName
              ? user.fullName
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()
              : ''}
          </div>
          <button
            onClick={toggleProfileMenu}
            className="flex items-center space-x-2 bg-white border rounded px-4 py-2 shadow hover:bg-gray-50 focus:outline-none"
          >
            <span>{user ? user.fullName : 'User'}</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${
                profileMenuOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {profileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
              <button
                onClick={handleChangePassword}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Ganti Password
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        <h2 className="text-xl font-bold mb-4">Data Lembaga Diklat</h2>
        {error && <div className="mb-4 text-red-600">{error}</div>}
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Cari nama Lembaga Diklat..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded w-1/3"
          />
          <button
            onClick={() => openModal()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Tambah Data
          </button>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Logo</th>
                  <th className="border border-gray-300 p-2">Nama Lembaga Diklat</th>
                  <th className="border border-gray-300 p-2">Matra</th>
                  <th className="border border-gray-300 p-2">Alamat</th>
                  <th className="border border-gray-300 p-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {currentData.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center p-4">
                      Tidak ada data
                    </td>
                  </tr>
                ) : (
                  currentData.map((item) => (
                    <tr key={item.id}>
                      <td className="border border-gray-300 p-2">
                        <img src={item.logo} alt="logo" className="w-20 h-auto" />
                      </td>
                      <td className="border border-gray-300 p-2">{item.name}</td>
                      <td className="border border-gray-300 p-2">{item.matra}</td>
                      <td className="border border-gray-300 p-2">{item.alamat}</td>
                      <td className="border border-gray-300 p-2">
                        <button
                          onClick={() => openModal(item)}
                          className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </>
        )}

        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
              <h3 className="text-lg font-bold mb-4">{editingId ? 'Edit Data Lemdiklat' : 'Tambah Data Lemdiklat'}</h3>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <input
                  type="file"
                  name="logo"
                  accept="image/*"
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required={!editingId}
                />
                {formData.logo && typeof formData.logo === 'string' && (
                  <img src={formData.logo} alt="Preview" className="w-20 h-auto" />
                )}
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lembaga Diklat"
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                />
                <select
                  name="matra"
                  value={formData.matra}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                >
                  <option value="Darat">Darat</option>
                  <option value="Laut">Laut</option>
                  <option value="Udara">Udara</option>
                </select>
                <input
                  type="text"
                  name="alamat"
                  placeholder="Alamat"
                  value={formData.alamat}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                />
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    {editingId ? 'Update' : 'Tambah'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDataLemdiklat;
