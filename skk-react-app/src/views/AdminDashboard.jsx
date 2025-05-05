import React, { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import { useNavigate } from 'react-router-dom';
import { useMenu } from '../navigation/menuManager';

const AdminDashboard = () => {
  const { user, logoutUser, filteredMenuItems } = useMenu('admin');
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

  return (
    <div className="flex min-h-screen bg-gray-100">
      <DashboardSidebar menuItems={filteredMenuItems} />
      <div className="flex-1 p-6">
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
        <h1 className="text-3xl font-bold mb-4">Welcome, {user ? user.fullName : 'Admin'}</h1>
        <p>This is your admin dashboard.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
