import React, { useContext, useState } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  const handleChangePassword = () => {
    navigate('/change-password');
  };

  // Example menu items with subjects for ability check
  const menuItems = [
    { name: 'Dashboard', path: '/user-dashboard', subject: 'dashboard' },
    { name: 'Profile', path: '/user/profile', subject: 'profile' },
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
        <div className="p-6 font-bold text-xl border-b">User Panel</div>
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
        {/* Top bar */}
        <div className="flex justify-end mb-6 relative">
          <button
            onClick={toggleProfileMenu}
            className="flex items-center space-x-2 bg-white border rounded px-4 py-2 shadow hover:bg-gray-50 focus:outline-none"
          >
            <span>{user ? user.fullName : 'User'}</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${profileMenuOpen ? 'rotate-180' : ''}`}
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

        {/* Dashboard content */}
        <h1 className="text-3xl font-bold mb-4">Welcome, {user ? user.fullName : 'User'}</h1>
        <p>This is your user dashboard.</p>
      </div>
    </div>
  );
};

export default UserDashboard;
