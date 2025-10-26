import React from 'react'
import brand_logo from "../../images/brand_logo.png";



const Navbar = () => {
  return (
    <div className='p-10'>
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

//     <div className='p-4 md:p-10'>
//   <nav className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0'>
    
//     <div className='w-full md:w-auto'>
//       <img src={brand_logo} alt="brand logo" className='w-40 md:w-48 mx-auto md:mx-0'/>
//     </div>

    
//     <ul className='flex flex-col md:flex-row gap-2 md:gap-10 w-full md:w-auto items-center text-center'>
//       <li className='cursor-pointer'>Menu</li>
//       <li className='cursor-pointer'>Location</li>
//       <li className='cursor-pointer'>About</li>
//       <li className='cursor-pointer'>Contact</li>
//     </ul>

//     <a className='px-6 py-2 text-center bg-red-700 text-white rounded w-full md:w-auto' href="#">
//       Login
//     </a>

//   </nav>
// </div>

  )
}

export default Navbar