// import React from 'react'

// const Features = () => {
//   return (
//     <section className="bg-[#f4e4d4] min-h-screen flex justify-center px-6 py-12 font-['Arial_Narrow']">
//         <div className="  font-semibold  tracking-wider  text-center">
//             <h2 className="text-5xl mb-2   leading-snug flex  uppercase justify-center"><span className="text-[#052331ea] ">COMPASSION</span> <span className="text-[#e6510c]"> COMES THROUGH <br/>
//             </span>
//              </h2> 
//              <h3 className="text-5xl text-[#e6510c] -mt-2 mb-4">IN ALL WE DO.</h3>

            
//               <hr className="border-t-2 border-dashed border-[#e6510c] w-full mx-auto mb-6" />

            
//              <p className='text-[#052331ea] text-sm mb-4 md:text-2xl leading-relaxed px-2  
//              text-center flex  justify-center items-center' >Comprehensive services and exceptional care to keep your beloved pets happy, healthy, and thriving.</p>

//         <div className='container grid grid-cols-3 gap-10 mt-32 text-white  ml-10 '>
//             <div className='box1'>
//                 <div className='h-[19vh] w-[22vw] bg-[#052331ea] rounded-2xl flex items-center justify-center pt-14'>   
//                     VET CARE</div>
//                     <div className='bg-amber-400 w-28 h-28 rounded-full flex items-center justify-center -mt-52 ml-28'>
//                         <img src="https://static.wixstatic.com/media/554ccd_05a0039ad00447c388dc690db972f071~mv2.png/v1/fill/w_214,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/554ccd_05a0039ad00447c388dc690db972f071~mv2.png" alt="" />
//                     </div>
//             </div>

//             <div className='box2 ml-5 '>
//                 <div className='h-[19vh] w-[22vw] bg-[#052331ea] rounded-2xl flex items-center justify-center pt-14'>PHARMACY</div>
//                 <div className='bg-amber-400 w-28 h-28 rounded-full flex items-center justify-center -mt-52 ml-28'>
//                     <img src="https://static.wixstatic.com/media/554ccd_f26081d9acd140fbadf780dc563b329f~mv2.png/v1/fill/w_214,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled.png" alt="" />
//                 </div>
//             </div>
//             <div className='box3 ml-10'>
//                 <div className='h-[19vh] w-[22vw] bg-[#052331ea] rounded-2xl flex items-center justify-center pt-14'>URGENT CARE</div>
//                 <div className='bg-amber-400 w-28 h-28 rounded-full flex items-center justify-center -mt-52 ml-28'>
//                     <img src='https://static.wixstatic.com/media/554ccd_5dc88174a5f14e36b23c9cf0cd2fd6d5~mv2.png/v1/fill/w_214,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled.png' alt="" />
//                 </div>
//             </div>
//             <div className='box4 ml-52 mt-35'>
//                 <div className='h-[19vh] w-[22vw] bg-[#052331ea] rounded-2xl flex items-center justify-center pt-14'>BATHING & GROOMING</div>
//                 <div className='bg-amber-400 w-28 h-28 rounded-full flex items-center justify-center -mt-52 ml-28'>
//                     <img src='https://static.wixstatic.com/media/554ccd_394619664b0f4e3c9d7be8da4cbc5adb~mv2.png/v1/fill/w_214,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled.png' alt="" />
//                 </div>
//             </div>
//             <div className='box5 ml-64 mt-35'>
//                 <div className='h-[19vh] w-[22vw] bg-[#052331ea] rounded-2xl flex items-center justify-center pt-14'>BOARDING & DAYPLAY</div>
//                 <div className='bg-amber-400 w-28 h-28 rounded-full flex items-center justify-center -mt-52 ml-28'>
//                     <img src="https://static.wixstatic.com/media/554ccd_e6da17855fb14afb9bb2e23ef8b05778~mv2.png/v1/fill/w_214,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled.png" alt="" />
//                 </div>
//             </div>
          

//             </div>


        
        
        
        
//         </div>
//         </section>
//   )
// }

// export default Features

const Features = () => {
    return (
      <section className="bg-[#f4e4d4] min-h-screen px-4 sm:px-6 py-12 font-['Arial_Narrow']">
        <div className="max-w-7xl mx-auto font-semibold tracking-wider text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-2 uppercase flex flex-wrap justify-center">
              <span className="text-[#052331ea]">COMPASSION</span> <span className="text-[#e6510c]">COMES THROUGH</span>
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl text-[#e6510c] mb-4">IN ALL WE DO.</h3>
          </div>
  
          <hr className="border-t-2 border-dashed border-[#e6510c] w-full mx-auto mb-6" />
  
          <p
            className="text-[#052331ea] text-sm sm:text-lg md:text-2xl leading-relaxed px-2 
            text-center flex justify-center items-center max-w-4xl mx-auto mb-12 md:mb-16"
          >
            Comprehensive services and exceptional care to keep your beloved pets happy, healthy, and thriving.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 mt-16 sm:mt-20 md:mt-24">
            {/* Feature 1 */}
            <div className="relative mx-auto w-full max-w-xs">
              <div className="h-24 sm:h-28 md:h-32 w-full bg-[#052331ea] rounded-2xl flex items-center justify-center pt-14 text-white">
                VET CARE
              </div>
              <div className="bg-amber-400 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 -top-10 sm:-top-12">
                <img
                  src="https://static.wixstatic.com/media/554ccd_05a0039ad00447c388dc690db972f071~mv2.png/v1/fill/w_214,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/554ccd_05a0039ad00447c388dc690db972f071~mv2.png"
                  alt="Vet Care"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
            </div>
  
            {/* Feature 2 */}
            <div className="relative mx-auto w-full max-w-xs">
              <div className="h-24 sm:h-28 md:h-32 w-full bg-[#052331ea] rounded-2xl flex items-center justify-center pt-14 text-white">
                PHARMACY
              </div>
              <div className="bg-amber-400 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 -top-10 sm:-top-12">
                <img
                  src="https://static.wixstatic.com/media/554ccd_f26081d9acd140fbadf780dc563b329f~mv2.png/v1/fill/w_214,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled.png"
                  alt="Pharmacy"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
            </div>
  
            {/* Feature 3 */}
            <div className="relative mx-auto w-full max-w-xs">
              <div className="h-24 sm:h-28 md:h-32 w-full bg-[#052331ea] rounded-2xl flex items-center justify-center pt-14 text-white">
                URGENT CARE
              </div>
              <div className="bg-amber-400 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 -top-10 sm:-top-12">
                <img
                  src="https://static.wixstatic.com/media/554ccd_5dc88174a5f14e36b23c9cf0cd2fd6d5~mv2.png/v1/fill/w_214,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled.png"
                  alt="Urgent Care"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
            </div>
  
            {/* Feature 4 */}
            <div className="relative mx-auto w-full max-w-xs mt-15 ml-66">
              <div className="h-24 sm:h-28 md:h-32 w-full bg-[#052331ea] rounded-2xl flex items-center justify-center pt-14 text-white">
                BATHING & GROOMING
              </div>
              <div className="bg-amber-400 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 -top-10 sm:-top-12">
                <img
                  src="https://static.wixstatic.com/media/554ccd_394619664b0f4e3c9d7be8da4cbc5adb~mv2.png/v1/fill/w_214,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled.png"
                  alt="Bathing & Grooming"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
            </div>
  
            {/* Feature 5 */}
            <div className="relative mx-auto w-full max-w-xs mt-15 ml-66">
              <div className="h-24 sm:h-28 md:h-32 w-full bg-[#052331ea] rounded-2xl flex items-center justify-center pt-14 text-white">
                BOARDING & DAYPLAY
              </div>
              <div className="bg-amber-400 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 -top-10 sm:-top-12">
                <img
                  src="https://static.wixstatic.com/media/554ccd_e6da17855fb14afb9bb2e23ef8b05778~mv2.png/v1/fill/w_214,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled.png"
                  alt="Boarding & Dayplay"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Features
  
