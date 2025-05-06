import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const AdminDataLSP = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    logo: '',
    name: '',
    kategori: '',
    asesor: '',
    tuk: '',
    skema: '',
  });
  const [editingId, setEditingId] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.getLSPData();
      setData(response);
    } catch (err) {
      setError('Gagal memuat data LSP');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (editingId) {
        await api.updateLSP(editingId, formData);
      } else {
        await api.createLSP(formData);
      }
      setFormData({
        logo: '',
        name: '',
        kategori: '',
        asesor: '',
        tuk: '',
        skema: '',
      });
      setEditingId(null);
      fetchData();
    } catch (err) {
      setError('Gagal menyimpan data');
    }
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Apakah Anda yakin ingin menghapus data ini?')) return;
    setError('');
    try {
      await api.deleteLSP(id);
      fetchData();
    } catch (err) {
      setError('Gagal menghapus data');
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Data LSP</h2>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      <form onSubmit={handleSubmit} className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
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
          placeholder="Nama LSP"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="kategori"
          placeholder="Kategori"
          value={formData.kategori}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="asesor"
          placeholder="Data Asesor"
          value={formData.asesor}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="tuk"
          placeholder="Data TUK"
          value={formData.tuk}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="skema"
          placeholder="Data Skema"
          value={formData.skema}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {editingId ? 'Update' : 'Tambah'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setFormData({
                  logo: '',
                  name: '',
                  kategori: '',
                  asesor: '',
                  tuk: '',
                  skema: '',
                });
                setEditingId(null);
              }}
              className="ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Batal
            </button>
          )}
        </div>
      </form>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Logo</th>
              <th className="border border-gray-300 p-2">Nama LSP</th>
              <th className="border border-gray-300 p-2">Kategori</th>
              <th className="border border-gray-300 p-2">Asesor</th>
              <th className="border border-gray-300 p-2">TUK</th>
              <th className="border border-gray-300 p-2">Skema</th>
              <th className="border border-gray-300 p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center p-4">
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
                  <td className="border border-gray-300 p-2">{item.kategori}</td>
                  <td className="border border-gray-300 p-2">{item.asesor}</td>
                  <td className="border border-gray-300 p-2">{item.tuk}</td>
                  <td className="border border-gray-300 p-2">{item.skema}</td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => handleEdit(item)}
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
    </div>
  );
};

export default AdminDataLSP;
