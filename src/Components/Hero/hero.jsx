import React from 'react'
import shoe_image from "../../images/shoe_image.png"
import { SiFlipkart  } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";


const Hero = () => {
  return (
    <main>
     

  <div className="flex flex-col md:flex-row-reverse justify-center items-center py-10 px-4 md:px-20 text-center md:text-left">
  <div className="w-full md:w-1/2 mb-10 md:mb-0">
    <img
      src={shoe_image}
      alt="shoes image"
      className="w-full object-contain mx-auto"
    />
  </div>

  <div className="w-full md:w-1/2 space-y-6">
    <h1 className="text-4xl md:text-7xl font-semibold tracking-wider text-center md:text-left">
      YOUR FEET DESERVE <br /> THE BEST
    </h1>

    <p className="text-sm md:text-base text-center md:text-left text-gray-700">
      YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
    </p>

    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
      <button className="bg-red-500 text-white px-6 py-3 md:px-4 md:py-2 cursor-pointer rounded w-full sm:w-auto text-sm md:text-xs">
        Shop Now
      </button>
      <button className="border text-gray-800 px-6 py-3 md:px-4 md:py-2 cursor-pointer rounded w-full sm:w-auto text-sm md:text-xs">
        Category
      </button>
    </div>

    <div>
      <p className="text-gray-700 text-lg text-center md:text-left">
        Also Available On
      </p>
      <div className="flex justify-center md:justify-start gap-5 mt-3">
        <SiFlipkart className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
        <FaAmazon className="w-6 h-6 md:w-8 md:h-8 text-black" />
      </div>
    </div>
  </div>
</div>


    </main>
  )
}

export default Hero