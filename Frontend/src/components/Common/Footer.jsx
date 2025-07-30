import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LuInstagram } from "react-icons/lu";
import { FaMeta } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="">
      <footer className='bg-[#ff9900] border-t py-10'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4 text-center md:text-left'>

          <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-2xl text-gray-900 mb-4 font-bold font-serif'>Delight Loop</h1>
            <p className='text-sm text-gray-600 mb-4 max-w-xs'>#1 Email Automation and Marketing Company</p>
            <p className='font-medium text-sm mb-4 text-gray-700'>Sign up and get 10% off now</p>
            
            {token ? (
              <button
                onClick={handleLogout}
                className='bg-black cursor-pointer text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-200'
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate('/register')}
                className='bg-black cursor-pointer text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-200'
              >
                Sign Up
              </button>
            )}
          </div>

          <div className='flex flex-col items-center md:items-start'>
            <h1 className='font-bold text-xl mb-3'>Explore</h1>
            <div className='flex flex-col space-y-2 font-serif'>
              <Link className='text-gray-600 hover:text-gray-900' to='/'>Home</Link>
              <Link className='text-gray-600 hover:text-gray-900' to='/builder'>Builder</Link>
              <Link className='text-gray-600 hover:text-gray-900' to='#'>Campaigns</Link>
              <Link className='text-gray-600 hover:text-gray-900' to='#'>About</Link>
            </div>
          </div>

          <div className='flex flex-col items-center md:items-start'>
            <h3 className='font-bold text-xl mb-4'>Follow Us</h3>
            <div className='flex space-x-4 mb-6'>
              <FaMeta className='text-xl hover:text-blue-600 cursor-pointer' />
              <LuInstagram className='text-xl hover:text-pink-500 cursor-pointer' />
              <BsTwitterX className='text-xl hover:text-black cursor-pointer' />
            </div>
            <div className='flex flex-col items-center md:items-start'>
              <h3 className='text-gray-600 text-sm mb-1'>Call Us</h3>
              <div className='flex items-center space-x-2'>
                <MdOutlineLocalPhone className='h-5 w-5 text-gray-700' />
                <p className='text-sm text-gray-700'>+91 9876543210</p>
              </div>
            </div>
          </div>

        </div>

        <div className='border-t border-gray-200 mt-10 pt-4'>
          <p className='text-gray-600 text-sm text-center'>© 2025 Delight Loop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
