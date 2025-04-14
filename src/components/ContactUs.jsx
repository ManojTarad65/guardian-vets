"use client";
import React, { useState } from 'react'

const ContactUs = () => {
    const [name, setName] = useState("");
    const[lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState(null);
    const [Email, setEmail] = useState();
    const [Message, setMessage] = useState("");
    const HandleClick = () => {
      alert("Appointment scheduled successfully");
    };
  
  
  return (
    <section className='bg-[#EDE8E3] h-[90vh] w-full font-["Arial_Narrow"]'>
      <div className="flex justify-between items-center">
        <div className="ml-84">
            <h2 className='text-6xl uppercase ml-28 mt-10'><span className='text-[#052331ea] font-semibold '>Get in touch</span> <span className='text-[#e6510c] font-semibold '>with us</span></h2>
            <hr className='border-t-2 border-dashed border-[#e6510c] w-full mb-4 mt-4 ml-10' />
            <p className='font-semibold text-[#052331ea] ml-20'>Have questions or need to schedule an appointment? Our team is here to assist you with all your pet care needs.</p>
          

          <div className='Contactus'>
          <div className="flex flex-col gap-3">
            <label htmlFor="Name">Name : </label>
            <input
              type="text"
              name="Name"
              id="Name"
              value={name}
              className="px-4 py-2 bg-[#EDE8E3] rounded border-2   "
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="lastName">Last Name : </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              className="px-4 py-2 bg-[#EDE8E3] rounded border-2"
              onChange={(e) => setLastName(e.target.value)}
            />
           
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="Email"
              id="Email"
              value={Email}
              className="px-4 py-2 bg-[#EDE8E3] rounded border-2"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="Mobile">Mobile Number :</label>

            <input
              type="number"
              className="px-4 py-2 bg-[#EDE8E3] rounded border-2"
              onChange={(e) => setMobile(e.target.value)}
            />
            <label htmlFor="Message">Message</label>
            <input 
              type="text"
              name="Message"
              id="Message"
              value={Message}
              className="px-4 py-2 bg-[#EDE8E3] rounded border-2"
              onChange={(e) => setMessage(e.target.value)}
            />
            
           
          </div>
          <div type="submit" onClick={HandleClick} className='px-32 py-4 bg-[#e6510c] text-white rounded-2xl border-2 ml-64 mr-64 mt-5  hover:bg-[#ff8269] cursor-pointer'>
              submit
            </div>
        </div>
    









          
        </div>
      </div>
    </section>
  )
}

export default ContactUs