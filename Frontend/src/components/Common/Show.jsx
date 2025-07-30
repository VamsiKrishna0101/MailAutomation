import React from 'react'
import myimage from '../../assets/myimage.avif'

const Show = () => {
  return (
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 mb-6 gap-10 m-10 text-black">
      
      <div className="flex flex-col justify-center items-center text-justify p-6 h-80 rounded-xl">
        <h1 className='text-3xl font-serif font-bold'>Get Started Easily With</h1>
        <h1 className='text-3xl font-serif font-bold m-1'>Our Support Join Now</h1>
        <p className='italic'>An onboarding specialist is here to help you get started with</p>
        <p className='italic'>confidence—it’s included with Standard and Premium plans.*</p>
        <div className="text-5xl font-bold text-[#10b981] m-10">
          <span className="text-black">Delight</span>
          <span className="text-[#10b981]">Loop</span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center rounded-xl pr-8">
        <img src={myimage} alt="Loading" />
      </div>

    </div>
  )
}

export default Show
