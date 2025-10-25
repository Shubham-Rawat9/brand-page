import React from 'react'
import brand_logo from "../../images/brand_logo.png";



const Navbar = () => {
  return (
    <div className='pt-5'>
        <nav className='flex justify-between items-center'>
            <div>
                <img src={brand_logo} alt="brand logo" className='mx-20'/>
            </div>
            <ul className='flex gap-10'>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <a className='p-2 w-25 text-center bg-red-700 text-white' href="#">Login</a>
        </nav>
    </div>
  )
}

export default Navbar