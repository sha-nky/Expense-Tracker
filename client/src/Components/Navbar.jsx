import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <div className="w-full bg-teal-500 p-4 px-2 flex flex-col justify-between items-center gap-4">
        <div className='w-full flex items-center justify-between px-2'>
          <Link to="/overview">
            <div className="text-white text-2xl font-bold">logo</div>
          </Link>

          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="p-2 rounded-3xl w-[40vw] text-center text-gray-600"
            />
          </div>

          <div className="text-white">
            <Link to="/profile">
              <FaUserCircle size={40} />
            </Link>
          </div>
        </div>

        <div className="w-full h-[5vh] flex space-x-4 bg-white items-center justify-end px-8 gap-8 rounded-2xl font-semibold text-gray-500 text-lg">
          <Link to="/overview" className="hover:text-gray-800">
            Overview
          </Link>
          <Link to="/transactions" className="hover:text-gray-800">
            Transactions
          </Link>
          <Link to="/budgets" className="hover:text-gray-800">
            Budgets
          </Link>
          <Link to="/expense" className="hover:text-gray-800">
            Expense
          </Link>
          <Link to="/carbon-footprint" className="hover:text-gray-800">
            Carbon Footprint
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;