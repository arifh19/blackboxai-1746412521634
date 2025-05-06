import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { loginUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const success = await loginUser(email, password);
    if (success) {
      if (user && user.ability) {
        const canManageAll = user.ability.some(
          (a) => a.action === 'manage' && a.subject === 'all'
        );
        if (canManageAll) {
          navigate('/admin-dashboard');
        } else {
          navigate('/user-dashboard');
        }
      } else {
        // fallback if user or ability is not yet loaded
        navigate('/user-dashboard');
      }
    } else {
      setError('Login gagal. Periksa email dan password Anda.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg flex flex-col md:flex-row">
        <div className="hidden md:block md:w-1/2 bg-gray-50 p-6 rounded-l">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="E-Services Illustration"
            className="w-full h-auto"
          />
          <h2 className="text-purple-600 text-xl font-bold mt-4">E-Services</h2>
        </div>
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Selamat datang! 👋</h2>
          {error && (
            <div className="mb-4 text-red-600 text-center font-semibold">{error}</div>
          )}
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="admin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember"
                className="mr-2"
              />
              <label htmlFor="remember" className="text-sm">
                Remember Me
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-200"
            >
              Sign in
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link
              to="/register"
              className="text-purple-600 hover:underline"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
