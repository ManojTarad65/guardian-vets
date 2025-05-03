// "use client";
// import React, { useState } from 'react'

// const ContactUs = () => {
//     const [name, setName] = useState("");
//     const[lastName, setLastName] = useState("");
//     const [mobile, setMobile] = useState(null);
//     const [Email, setEmail] = useState();
//     const [Message, setMessage] = useState("");
//     const HandleClick = () => {
//       alert("Appointment scheduled successfully");
//     };
  
  
//   return (
//     <section className='bg-[#EDE8E3] h-[90vh] w-full font-["Arial_Narrow"]'>
//       <div className="flex justify-between items-center">
//         <div className="ml-84">
//             <h2 className='text-6xl uppercase ml-28 mt-10'><span className='text-[#052331ea] font-semibold '>Get in touch</span> <span className='text-[#e6510c] font-semibold '>with us</span></h2>
//             <hr className='border-t-2 border-dashed border-[#e6510c] w-full mb-4 mt-4 ml-10' />
//             <p className='font-semibold text-[#052331ea] ml-20'>Have questions or need to schedule an appointment? Our team is here to assist you with all your pet care needs.</p>
          

//           <div className='Contactus'>
//           <div className="flex flex-col gap-3">
//             <label htmlFor="Name">Name : </label>
//             <input
//               type="text"
//               name="Name"
//               id="Name"
//               value={name}
//               className="px-4 py-2 bg-[#EDE8E3] rounded border-2   "
//               onChange={(e) => setName(e.target.value)}
//             />
//             <label htmlFor="lastName">Last Name : </label>
//             <input
//               type="text"
//               name="lastName"
//               id="lastName"
//               value={lastName}
//               className="px-4 py-2 bg-[#EDE8E3] rounded border-2"
//               onChange={(e) => setLastName(e.target.value)}
//             />
           
//             <label htmlFor="Email">Email</label>
//             <input
//               type="email"
//               name="Email"
//               id="Email"
//               value={Email}
//               className="px-4 py-2 bg-[#EDE8E3] rounded border-2"
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <label htmlFor="Mobile">Mobile Number :</label>

//             <input
//               type="number"
//               className="px-4 py-2 bg-[#EDE8E3] rounded border-2"
//               onChange={(e) => setMobile(e.target.value)}
//             />
//             <label htmlFor="Message">Message</label>
//             <input 
//               type="text"
//               name="Message"
//               id="Message"
//               value={Message}
//               className="px-4 py-2 bg-[#EDE8E3] rounded border-2"
//               onChange={(e) => setMessage(e.target.value)}
//             />
            
           
//           </div>
//           <div type="submit" onClick={HandleClick} className='px-32 py-4 bg-[#e6510c] text-white rounded-2xl border-2 ml-64 mr-64 mt-5  hover:bg-[#ff8269] cursor-pointer'>
//               submit
//             </div>
//         </div>
    









          
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ContactUs

"use client"
import { useState } from "react"

const ContactUs = () => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [mobile, setMobile] = useState(null)
  const [Email, setEmail] = useState()
  const [Message, setMessage] = useState("")
  const HandleClick = () => {
    alert("Appointment scheduled successfully")
  }

  return (
    <section className='bg-[#EDE8E3] min-h-screen w-full font-["Arial_Narrow"] py-8 px-4 md:px-8 lg:px-12'>
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-6xl uppercase mb-2">
            <span className="text-[#052331ea] font-semibold">Get in touch</span>{" "}
            <span className="text-[#e6510c] font-semibold">with us</span>
          </h2>
          <hr className="border-t-2 border-dashed border-[#e6510c] w-full mb-4 mt-4" />
          <p className="font-semibold text-[#052331ea] mb-8 max-w-2xl mx-auto md:mx-0">
            Have questions or need to schedule an appointment? Our team is here to assist you with all your pet care
            needs.
          </p>
        </div>

        <div className="Contactus max-w-xl mx-auto md:mx-0">
          <div className="grid gap-4 mb-6">
            <div>
              <label htmlFor="Name" className="block mb-1">
                Name :{" "}
              </label>
              <input
                type="text"
                name="Name"
                id="Name"
                value={name}
                className="px-4 py-2 bg-[#EDE8E3] rounded border-2 w-full"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block mb-1">
                Last Name :{" "}
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                className="px-4 py-2 bg-[#EDE8E3] rounded border-2 w-full"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="Email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                name="Email"
                id="Email"
                value={Email}
                className="px-4 py-2 bg-[#EDE8E3] rounded border-2 w-full"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="Mobile" className="block mb-1">
                Mobile Number :
              </label>
              <input
                type="number"
                id="Mobile"
                className="px-4 py-2 bg-[#EDE8E3] rounded border-2 w-full"
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="Message" className="block mb-1">
                Message
              </label>
              <textarea
                name="Message"
                id="Message"
                value={Message}
                rows="4"
                className="px-4 py-2 bg-[#EDE8E3] rounded border-2 w-full"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={HandleClick}
            className="w-full md:w-auto px-6 py-3 md:px-8 bg-[#e6510c] text-white rounded-2xl border-2 hover:bg-[#ff8269] cursor-pointer mx-auto block md:inline-block"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
