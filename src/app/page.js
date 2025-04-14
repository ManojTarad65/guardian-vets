import React from 'react'

import Home from '@/components/Home'
import WhoWeAre from '@/components/Who-W-Are'
import Features from '@/components/Features'
import OurValues from '@/components/OurValues'
import Review from '@/components/Review'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <div className='bg-[#EDE8E3] h-screen w-screen text-black'>

    
      <Home/>
      <WhoWeAre/>
      <Features/>
      <OurValues/>
      <Review/>
      <ContactUs/>
      <Footer/>
      </div>
  )
}

export default page