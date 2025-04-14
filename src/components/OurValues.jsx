import React from 'react'

const OurValues = () => {
  return (
    <section className="bg-[#EDE8E3] h-[70vh] w-full font-['Arial_Narrow'] ">
        <div className='text flex  justify-between items-center mb-2'>
            <div className='ml-64'>
              <h2 className=" text-6xl   " > 
              <span className='text-[#052331ea] font-semibold font-["Rockwell"]'>Our</span>{" "}
            <span className='text-[#e6510c] font-semibold font-["Rockwell"]'>Values</span>
            <hr className="border-t-2 border-dashed border-[#e6510c] w-full mx-auto mb-4 mt-4" />
            </h2> 
            <p className='text-2xl leading-relaxed'>We treat every pet like a member of our own family.<br/>
                We strive to provide the highest quality of <br/>care.
                Using the latest medical advancements to <br/>
                 ensure your pet's health.</p>
           
             <button className='text-[#e6510c] text-sm border border-[#e6510c] rounded-full py-1 px-3
  transition duration-300 hover:bg-[#e6510c] hover:text-white cursor-pointer'>
  CAREERS
</button>
            </div>
        <div className='bg-amber-500 w-1/3 h-[60vh] rounded-3xl mt-9 mr-36'>
        <img src='https://static.wixstatic.com/media/554ccd_85ce5ff5fcba43f8bb4ab60d25d0d764~mv2.jpg/v1/fill/w_526,h_526,fp_0.58_0.14,lg_1,q_80,enc_avif,quality_auto/Basset%20Hound%20Check-Up.jpg' alt="" className='w-full h-full object-cover rounded-3xl'/>
        </div>
        </div>
    </section>
  )
}

export default OurValues


