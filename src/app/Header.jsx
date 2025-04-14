import React from 'react'

const Header = () => {
  return (
    <div className="bg-[#EDE8E3] text-black p-7 -mb-20 font-semibold font-['Arial_Narrow']">
        <div className="Navbar flex justify-between ">
            <div>
                <img src="https://static.wixstatic.com/media/554ccd_46dcb1fddeed430f8085eae2f9b0b222~mv2.png/v1/crop/x_37,y_185,w_407,h_126/fill/w_274,h_84,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Guardian%20Vets.png" alt="" className='w-32 ml-5'/>
            </div>
            <div className='flex justify-between gap-15 tracking-widest py-2 uppercase cursor-pointer '>
            <div className="flex ml-12 hover:text-[#e6510c]">Location</div>
            <div className="hover:text-[#e6510c]">Services</div>
            <div className="hover:text-[#e6510c]">For Clients</div>
            <div className="hover:text-[#e6510c]">Carrers</div>
            <div className="hover:text-[#e6510c]">About</div>
            <div className='  -mt-4.5  flex gap-2'>
                <div className='py-4 px-4 text-white mr-2 bg-[#e6510c] rounded-4xl hover:bg-[#ff8269] '>
                    Book Appointment</div>
                    
            <div className='  bg-[#052331ea] capitalize  py-4 px-4 text-white rounded-full hover:bg-[#0f111fb3]'>Login</div>
            </div>
            </div>
        </div>






    </div>
  )
}

export default Header