import React from 'react';
import brand_logo from "../../images/brand_logo.png";



const Navbar = () => {
  return (
 

   <div className="p-4 md:p-6 lg:p-10">
  <nav className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">

    <div className="flex-shrink-0">
      <img src={brand_logo} alt="brand logo" className="mx-auto md:mx-0" />
    </div>

    <ul className="flex flex-col md:flex-row gap-4 md:gap-10 text-center md:text-left">
      <li className="cursor-pointer hover:text-red-600 transition">Menu</li>
      <li className="cursor-pointer hover:text-red-600 transition">Location</li>
      <li className="cursor-pointer hover:text-red-600 transition">About</li>
      <li className="cursor-pointer hover:text-red-600 transition">Contact</li>
    </ul>

    <a href="#" className="p-2 px-4 bg-red-700 text-white rounded-md text-center hover:bg-red-800 transition"> Login </a>
  </nav>
</div>


  )
}

export default Navbar