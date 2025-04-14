
import React from "react";

const WhoWeAre = () => {
  return (
    <section className="min-h-screen bg-[#052331ea] flex items-center justify-center px-6 py-12 font-['Arial_Narrow'] ">
      <div className="max-w-4xl text-center uppercase font-semibold tracking-wider -mt-96">
    
        <h2 className="text-5xl mb-4">
          <span className="text-white">who</span>{" "}
          <span className="text-[#e6510c]">we are</span>
        </h2>

        
        <hr className="border-t-2 border-dashed border-[#e6510c] w-full mx-auto mb-6" />

      
        <p className="text-white text-base leading-relaxed mb-8 font-light">
          Our veterinary clinic has been serving the community for over 7 years.
          With a team of experienced veterinarians and a passion for animal care,
          we offer a wide range of services to keep your pets<br/>
           healthy and happy.
        </p>

        
        <button className="text-[#e6510c] text-xl  border-2 border-[#e6510c] rounded-full py-4 px-6 transition duration-300 hover:bg-[#e6510c] hover:text-white cursor-pointer font-light">
          REQUEST AN APPOINTMENT
        </button>
      
      </div>
      <div className="bg-amber-500 w-2/3 h-[70vh] rounded-3xl mt-44">
      <img src="https://static.wixstatic.com/media/c164850821db4872b04bfe85bad09607.jpg/v1/fill/w_2240,h_1260,fp_0.46_0.36,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Vet%20Examining%20Dog.jpg" alt="" className='w-full h-full object-cover rounded-3xl'/>
      </div>
    </section>
  );
};

export default WhoWeAre;

