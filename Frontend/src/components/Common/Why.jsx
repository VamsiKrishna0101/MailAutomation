import React from 'react'

const Why = () => {
  return (
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 mb-6 gap-10 m-10 bg-[black] text-white">
       <div className={`flex flex-col justify-center items-center text-justify p-6 h-80 rounded-xl`}>
        <span className='text-3xl font-serif text-bold'>Find out why we’re</span>
        <span className='text-3xl font-serif text-bold'>best-in-class</span>
        <p className='m-1 italic'>The #1 Email Marketing</p>
        <p className='italic'> And Automative Platform</p>
       </div>
        <div className={`flex flex-col justify-center items-center text-justify p-6 h-80 rounded-xl`}>
                <span className='text-3xl font-serif text-bold'>Upto 10X Profits</span>
                <span className='text-3xl font-serif text-bold'>Seen By Our Customers</span>
                <h1 className='m-2 italic'>Trusted By 11M+ Users</h1>
                <p className='italic'>Join Now</p>
         </div>
            <div className={`flex flex-col justify-center items-center text-justify p-6 h-80 rounded-xl`}>
                <span className='text-3xl font-serif text-bold'>10 Years Of Experience</span>
                <span className='italic m-1'>10k+ happy Customers</span>
            </div>

    </div>
  )
}

export default Why
