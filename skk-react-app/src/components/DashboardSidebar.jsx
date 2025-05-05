import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = ({ menuItems }) => {
  return (
    <nav className="w-64 bg-white shadow-md">
      <div className="p-6 font-bold text-xl border-b">Panel</div>
      <ul className="mt-4">
        {menuItems && menuItems.length > 0 ? (
          menuItems.map((item) => (
            <li key={item.path} className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))
        ) : (
          <li className="px-6 py-3">No menu available</li>
        )}
      </ul>
    </nav>
  );
};

export default DashboardSidebar;
