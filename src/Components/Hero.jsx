import React from 'react'
import Lottie from 'lottie-react'
import Hero1 from "../../src/assets/Hero.json"

const Hero = () => {
  return (
    <div className='w-full   p-4'>
      <div className='w-full h-full rounded-xl bg-[rgb(101,185,198)] flex'>
        <div className='left-container  w-[70%] h-full p-2'>
<h1 className='text-white font-bold text text-xl p-2 '>Our Network</h1>
<p className='text-white mt-2'>Navigate within our network of healthcare Providers</p>
<button className='bg-white text-black rounded-2xl p-3 mt-2 px-7'>Search Network  <i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className='right-container  w-[30%] h-full mt-14'>
          <Lottie animationData={Hero1} style={{ width: '100%', height: '100%' }}></Lottie>
        </div>
      </div>
    </div>
  )
}

export default Hero
