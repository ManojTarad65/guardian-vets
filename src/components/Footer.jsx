import React from 'react'

const Footer = () => {
  return (
    <section className='bg-[#052331ea] h-[25vh] w-full font-["Arial_Narrow"] flex justify-between items-center'>
        <div className=''>
            <div className='ml-64'>
                <h2 className='h-20 w-50  ml-84 mt-5'>
                <img src="https://static.wixstatic.com/media/554ccd_46dcb1fddeed430f8085eae2f9b0b222~mv2.png/v1/crop/x_37,y_185,w_407,h_126/fill/w_274,h_84,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Guardian%20Vets.png" alt="" className='w-87 ml-5 invert'/>
                </h2>
            </div>
            <div className='flex justify-between items-center gap-10 text-white ml-74 mt-10'>
                <h2>Privacy Policy</h2>
                <h2>Payment & Cancellation Policy</h2>
                <div className='links flex justify-between items-center gap-5'>
                    <div className='hover:text-[#e6510c]'>Github</div>
                    <div className='hover:text-[#e6510c]'>Linkedin</div>
                    <div className='hover:text-[#e6510c]'>Instagram</div>
                    <div className='hover:text-[#e6510c]'>Facebook</div>
                </div>
                <h2 className='ml-32'>© 2024 Guardian Vets. Designed by Manoj</h2>

                
            </div>
        </div>
        
        
        </section>
  )
}

export default Footer