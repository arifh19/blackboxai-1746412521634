import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = ({ menuItems }) => {
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleSubMenu = (menuName) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <nav className="w-64 bg-gray-100 shadow-md">
      <div className="p-6 font-bold text-xl border-b">Panel</div>
      <ul className="mt-4">
        {menuItems && menuItems.length > 0 ? (
          menuItems.map((item) => (
            <li key={item.name} className="px-6 py-3 cursor-pointer">
              {item.subMenu ? (
                <>
                  <div
                    onClick={() => toggleSubMenu(item.name)}
                    className="flex justify-between items-center hover:bg-gray-300 rounded px-2 py-1"
                  >
                    <span>{item.name}</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        expandedMenus[item.name] ? 'rotate-90' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  {expandedMenus[item.name] && (
                    <ul className="mt-2 ml-4 border-l border-gray-300">
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.name} className="py-1 hover:bg-gray-300 rounded px-2">
                          <Link to={subItem.path}>{subItem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={item.path} className="hover:bg-gray-300 rounded px-2 py-1 block">
                  {item.name}
                </Link>
              )}
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
