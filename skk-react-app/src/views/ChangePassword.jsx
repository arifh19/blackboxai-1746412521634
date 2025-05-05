import React, { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const { authTokens, logoutUser, user } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (newPassword !== retypePassword) {
      setError('Password baru dan konfirmasi password tidak cocok.');
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/auth/password`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authTokens.accessToken}`,
        },
        body: JSON.stringify({ currentPassword, password: newPassword }),
      });

      if (!response.ok) {
        throw new Error('Gagal mengubah password');
      }

      setMessage('Password berhasil diubah. Silakan login ulang.');
      setCurrentPassword('');
      setNewPassword('');
      setRetypePassword('');
      logoutUser();
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan');
    }
  };

  // Example menu items with subjects for ability check
  const menuItems = [
    { name: 'Dashboard', path: user && user.role === 'admin' ? '/admin-dashboard' : '/user-dashboard', subject: 'dashboard' },
    { name: 'Daftar LSP', path: '/daftar-lsp', subject: 'daftarLSP' },
    { name: 'Daftar Asosiasi', path: '/daftar-asosiasi', subject: 'daftarAsosiasi' },
    { name: 'Daftar Lembaga Diklat', path: '/daftar-lembaga-diklat', subject: 'daftarLembagaDiklat' },
  ];

  // Check if user has ability to access a subject
  const canAccess = (subject) => {
    if (!user || !user.ability) return false;
    return user.ability.some(
      (a) => (a.action === 'manage' && a.subject === 'all') || (a.action === 'read' && a.subject === subject)
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="w-64 bg-white shadow-md">
        <div className="p-6 font-bold text-xl border-b">Panel</div>
        <ul className="mt-4">
          {menuItems.map(
            (item) =>
              canAccess(item.subject) && (
                <li key={item.path} className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                  <a href={item.path}>{item.name}</a>
                </li>
              )
          )}
        </ul>
      </nav>

      {/* Main content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6">Ganti Password</h2>
        {message && <div className="mb-4 text-green-600 font-semibold">{message}</div>}
        {error && <div className="mb-4 text-red-600 font-semibold">{error}</div>}
        <form onSubmit={handleSubmit} className="max-w-md">
          <label htmlFor="currentPassword" className="block mb-2 font-medium">
            Password Lama
          </label>
          <input
            type="password"
            id="currentPassword"
            placeholder="Masukkan password lama"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="newPassword" className="block mb-2 font-medium">
            Password Baru
          </label>
          <input
            type="password"
            id="newPassword"
            placeholder="Masukkan password baru"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="retypePassword" className="block mb-2 font-medium">
            Konfirmasi Password Baru
          </label>
          <input
            type="password"
            id="retypePassword"
            placeholder="Ketik ulang password baru"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            className="w-full p-2 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          >
            Ubah Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
