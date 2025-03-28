import { font } from '@/app/Components/font/font'
import Navbar from '@/app/Components/Navbar'
import React from 'react'
import AudioFormatting from './AudioFormatting'
import AudioSequence from './AudioSequence'
import ContactBanner from '@/app/Components/ContactBanner'
import Footer from '@/app/Components/Footer'
import Apart from '@/app/Components/Apart'
import AudioDesign from './AudioDesign'

const page = () => {
  return (
    <div className={`${font.className}`}>
      <Navbar />
      <div className="relative  w-full min-h-[30rem] bg-cover bg-center" style={{ backgroundImage: "url('/whitewood.png')" }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black px-4 text-center">
          <p className="text-3xl md:text-6xl">Audio Book Services</p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
          Silver Gate offers an audiobook self-publishing service that helps authors successfully transform their written works into engaging, professionally narrated audiobooks. Learn more about our service below and how an audiobook can benefit your readers.
          </p>
          {/* <p className="pt-8 text-xl italic max-w-3xl">*Cover Design and Interior Formatting are required services.</p>    */}
          <button className="mt-8 button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
            Get Started!
          </button>
        </div>
      </div>
      <AudioDesign/>
      <AudioSequence/>
      <AudioFormatting/>
      <Apart/>
      <ContactBanner/>
      <Footer/>
    </div>
  )
}

export default page
