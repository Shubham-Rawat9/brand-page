import React from 'react'
import shoe_image from "../../images/shoe_image.png"



const Hero = () => {
  return (
    <div className='flex justify-between'>
        <div>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p> YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        
            <div className='flex'>
                <button>Shop Now</button>
                <button>Category</button>
            </div>

            <div>
                <p>Also Available On</p>
                <span>flipcart icon</span>
                <span>Amazon icon</span>
            </div>
        </div>
        <div>
            <img src={shoe_image} alt="shoes image" />
        </div>

    </div>
  )
}

export default Hero