import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import DashboardSidebar from '../../components/DashboardSidebar';
import { useMenu } from '../../navigation/menuManager';

const AdminDataAsosiasi = () => {
  const { filteredMenuItems } = useMenu('admin');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    logo: '',
    name: '',
    matra: '',
    alamat: '',
  });
  const [editingId, setEditingId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.getAsosiasiData();
      setData(response);
    } catch (err) {
      setError('Gagal memuat data Asosiasi');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (item = null) => {
    if (item) {
      setFormData(item);
      setEditingId(item.id);
    } else {
      setFormData({
        logo: '',
        name: '',
        matra: '',
        alamat: '',
      });
      setEditingId(null);
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (editingId) {
        await api.updateAsosiasi(editingId, formData);
      } else {
        await api.createAsosiasi(formData);
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
      await api.deleteAsosiasi(id);
      fetchData();
    } catch (err) {
      setError('Gagal menghapus data');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <DashboardSidebar menuItems={filteredMenuItems} />
      <div className="flex-1 p-6 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">Data Asosiasi</h2>
        {error && <div className="mb-4 text-red-600">{error}</div>}
        <button
          onClick={() => openModal()}
          className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Tambah Data
        </button>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Logo</th>
                <th className="border border-gray-300 p-2">Nama Asosiasi</th>
                <th className="border border-gray-300 p-2">Matra</th>
                <th className="border border-gray-300 p-2">Alamat</th>
                <th className="border border-gray-300 p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center p-4">
                    Tidak ada data
                  </td>
                </tr>
              ) : (
                data.map((item) => (
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
        )}

        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
              <h3 className="text-lg font-bold mb-4">{editingId ? 'Edit Data Asosiasi' : 'Tambah Data Asosiasi'}</h3>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name="logo"
                  placeholder="Logo URL"
                  value={formData.logo}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Asosiasi"
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                />
                <input
                  type="text"
                  name="matra"
                  placeholder="Matra"
                  value={formData.matra}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                />
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

export default AdminDataAsosiasi;
