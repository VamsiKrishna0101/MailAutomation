import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate=useNavigate()
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <div className='mx-auto'>
       <div className='text-center m-18'>
        <h1 className='text-4xl font-bold font-serif'>Turn Emails Into Your Revenue</h1>
          <p className='italic m-1 text-md'>Delight Loop Is The Number #1 Marketing and Automation Platform</p>
          <p className='italic text-md'>Join Now and Get More Sales And Profits</p>
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
       
    </div>
  )
}

export default Hero
