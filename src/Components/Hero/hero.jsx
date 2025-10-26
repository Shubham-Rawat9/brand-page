import React from 'react'
import shoe_image from "../../images/shoe_image.png"
import { SiFlipkart  } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";


const Hero = () => {
  return (
    <main>
     <div className='flex justify-center items-center py-10 gap-10 md:px-20'>
        <div className='w-full md:w-1/2 space-y-6'>
            <h1 className='text-7xl md:text-8xl font-semibold tracking-wider'>YOUR FEET DESERVE <br/> THE BEST</h1>
            <p className='text-sm md:text-base'> YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
         
            <div className='flex gap-8 mt-4'>
                <button className='border-1 bg-red-500 text-white px-6 py-3 cursor-pointer'>Shop Now</button>
                <button className='border-1 text-gray-800 px-6 py-3 cursor-pointer'>Category</button>
            </div>

            <div>
                <p className='text-gray-700 text-lg'>Also Available On</p>
                <div className='flex gap-5 mt-3'>
                <span className='flex'><SiFlipkart className='w-8 h-8'/></span>
                <span className='flex'><FaAmazon className='w-8 h-8'/></span>
                </div>
            </div>
        </div>
        <div className='w-1/2 mt-10 flex justify-center'>
            <img src={shoe_image} alt="shoes image" className='w-full'/>
        </div>

    </div> 

    {/*  code */}
    {/* <div className='flex flex-col md:flex-row justify-center items-center py-10 px-4 md:px-20'>
  <div className='w-full md:w-1/2 space-y-6'>
    <h1 className='text-4xl md:text-8xl font-semibold tracking-wider'>
      YOUR FEET DESERVE <br/> THE BEST
    </h1>
    <p className='text-sm md:text-base'>
      YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
    </p>

    <div className='flex flex-col sm:flex-row gap-4 mt-4'>
      <button className='bg-red-500 text-white px-6 py-3 cursor-pointer rounded w-full sm:w-auto'>
        Shop Now
      </button>
      <button className='border text-gray-800 px-6 py-3 cursor-pointer rounded w-full sm:w-auto'>
        Category
      </button>
    </div>

    <div>
      <p className='text-gray-700 text-lg'>Also Available On</p>
      <div className='flex gap-5 mt-3'>
        <SiFlipkart className='w-6 h-6 md:w-8 md:h-8 text-blue-500'/>
        <FaAmazon className='w-6 h-6 md:w-8 md:h-8 text-black'/>
      </div>
    </div>
  </div>

  <div className='w-full md:w-1/2 mt-10 md:mt-0'>
    <img src={shoe_image} alt="shoes image" className='w-full object-contain'/>
  </div>
</div> */}

    {/*  code */}
    </main>
  )
}

export default Hero