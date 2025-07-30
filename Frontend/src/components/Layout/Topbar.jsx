import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
const TopBar = () => {
  return (
    <div>
       <div className='bg-[white] text-black'>
        <div className=' container mx-auto '>
            <div className='flex '>
            <div className='ml-5 hidden md:flex items-center justify-between space-x-4'>
                <h1 className='italic text-lg font-bold'>Delight Loop</h1>
                <Link to='./'><FaLinkedin/></Link>
            </div>

            <div className=' flex-1 text-small text-center'>
                <span className='italic text-lg'>Delight Loop Grow Pipeline & Reduce Churn</span>
            </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default TopBar
