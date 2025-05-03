// import React from 'react'

// const Header = () => {
//   return (
//     <div className="bg-[#EDE8E3] text-black p-7 -mb-20 font-semibold font-['Arial_Narrow']">
//         <div className="Navbar flex justify-between ">
//             <div>
//                 <img src="https://static.wixstatic.com/media/554ccd_46dcb1fddeed430f8085eae2f9b0b222~mv2.png/v1/crop/x_37,y_185,w_407,h_126/fill/w_274,h_84,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Guardian%20Vets.png" alt="" className='w-32 ml-5'/>
//             </div>
//             <div className='flex justify-between gap-15 tracking-widest py-2 uppercase cursor-pointer '>
//             <div className="flex ml-12 hover:text-[#e6510c]">Location</div>
//             <div className="hover:text-[#e6510c]">Services</div>
//             <div className="hover:text-[#e6510c]">For Clients</div>
//             <div className="hover:text-[#e6510c]">Carrers</div>
//             <div className="hover:text-[#e6510c]">About</div>
//             <div className='  -mt-4.5  flex gap-2'>
//                 <div className='py-4 px-4 text-white mr-2 bg-[#e6510c] rounded-4xl hover:bg-[#ff8269] '>
//                     Book Appointment</div>
                    
//             <div className='  bg-[#052331ea] capitalize  py-4 px-4 text-white rounded-full hover:bg-[#0f111fb3]'>Login</div>
//             </div>
//             </div>
//         </div>






//     </div>
//   )
// }

// export default Header
"use client";

import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#EDE8E3] text-black p-5 font-semibold font-['Arial_Narrow']">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img
          src="https://static.wixstatic.com/media/554ccd_46dcb1fddeed430f8085eae2f9b0b222~mv2.png/v1/crop/x_37,y_185,w_407,h_126/fill/w_274,h_84,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Guardian%20Vets.png"
          alt="Guardian Vets"
          className="w-28 sm:w-32 ml-2 sm:ml-5"
        />

        {/* Hamburger Icon for Mobile */}
        <div
          className="md:hidden cursor-pointer pr-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-6 lg:gap-x-10 uppercase tracking-widest">
          <div className="hover:text-[#e6510c] cursor-pointer">Location</div>
          <div className="hover:text-[#e6510c] cursor-pointer">Services</div>
          <div className="hover:text-[#e6510c] cursor-pointer">For Clients</div>
          <div className="hover:text-[#e6510c] cursor-pointer">Carrers</div>
          <div className="hover:text-[#e6510c] cursor-pointer">About</div>
          <div className="flex gap-2 -mt-1">
            <div className="py-2 px-4 text-white bg-[#e6510c] rounded-full hover:bg-[#ff8269] cursor-pointer">
              Book Appointment
            </div>
            <div className="py-2 px-4 text-white bg-[#052331ea] rounded-full hover:bg-[#0f111fb3] cursor-pointer">
              Login
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm uppercase tracking-wide pl-4">
          <div className="hover:text-[#e6510c] cursor-pointer">Location</div>
          <div className="hover:text-[#e6510c] cursor-pointer">Services</div>
          <div className="hover:text-[#e6510c] cursor-pointer">For Clients</div>
          <div className="hover:text-[#e6510c] cursor-pointer">Carrers</div>
          <div className="hover:text-[#e6510c] cursor-pointer">About</div>
          <div className="flex flex-col gap-2 mt-2 w-fit">
            <div className="py-2 px-4 text-white bg-[#e6510c] rounded-full hover:bg-[#ff8269] cursor-pointer">
              Book Appointment
            </div>
            <div className="py-2 px-4 text-white bg-[#052331ea] rounded-full hover:bg-[#0f111fb3] cursor-pointer">
              Login
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
