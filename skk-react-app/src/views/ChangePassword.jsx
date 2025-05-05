import React, { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const { authTokens, logoutUser } = useContext(AuthContext);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await fetch(`${backendUrl}/auth/login`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authTokens.accessToken}`,
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        throw new Error('Gagal mengubah password');
      }

      setMessage('Password berhasil diubah. Silakan login ulang.');
      setPassword('');
      logoutUser();
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Ganti Password</h2>
        {message && <div className="mb-4 text-green-600 text-center font-semibold">{message}</div>}
        {error && <div className="mb-4 text-red-600 text-center font-semibold">{error}</div>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="password" className="block mb-2 font-medium">
            Password Baru
          </label>
          <input
            type="password"
            id="password"
            placeholder="Masukkan password baru"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Ubah Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
