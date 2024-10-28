import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    navigate("/");
  }

  return (
    <div className="bg-teal-500 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <FaUserCircle size={50} className="rounded-full" />
        <div className="ml-4">
          <h2 className="text-white text-lg">Username</h2>
          <p className="text-white">HelLoworld123</p>
        </div>
        <button className="ml-auto bg-teal-600 text-white p-2 rounded-full">
          Edit
        </button>
      </div>
      <div className="space-y-4">
        <button className="w-full bg-white text-teal-500 p-3 rounded-md flex items-center">
          <span className="mr-2">📁</span> Account
        </button>
        <button className="w-full bg-white text-teal-500 p-3 rounded-md flex items-center">
          <span className="mr-2">⚙️</span> Settings
        </button>
        <button className="w-full bg-white text-teal-500 p-3 rounded-md flex items-center">
          <span className="mr-2">📊</span> Export Data
        </button>
        <button 
          className="w-full bg-white text-teal-500 p-3 rounded-md flex items-center"
          onClick={handleLogout}
        >
          <span className="mr-2">🚪</span> Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;