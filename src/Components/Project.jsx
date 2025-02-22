import React from 'react'
import Pulsevive from '../assets/Pulsevibe.png'
import Syncwave from '../assets/Syncwave.png'
import Urlshortner from '../assets/Urlshortner.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export const Project = () => {
  const handlePulseVibe=()=>{
    window.open("https://github.com/SLANGERES/PulseVibes", "_blank");
  }
  const handleSyncwave = () => {
    window.open("https://github.com/SLANGERES/Syncwave", "_blank");
  };
  const handleUrlShort = () => {
    window.open("https://github.com/SLANGERES/UrlShortner.github.io", "_blank");
  };

  return (
    <div className='flex flex-col min-h-[1024px]'>
      <div className=' text-white'>
        <div className='font-bold text-8xl tracking-wide '>RECENT</div>
        <div className='font-bold text-8xl tracking-wide text-emerald-800 '>PROJECTS</div>
      </div>
      <div className='h-[50px]'>
      </div>
      <div className='flex flex-col space-y-3'>
        <div className='w-[70%] h-[200px] rounded-2xl hover:translate-y-1 hover:bg-[#1B1B1B] hover:duration-500  hover:ease-in-out flex flex-row cursor-pointer'onClick={handlePulseVibe}>
          <div className=' rounded-2xl flex justify-center items-center object-cover'>
            <img src={Pulsevive} alt="" className=' w-[160px] h-[160px] rounded-2xl ' />
          </div>
          <div className='w-[30px]'></div>
          <div className='flex justify-center flex-col flex-1'>
            <h1 className='text-white text-3xl font-semibold'>PulseVibe</h1>
            <span className='text-emerald-800'>Emotion based Music Recommendation Web App</span>
          </div>
          <div className='flex justify-end items-center'>
            <FontAwesomeIcon icon={faArrowRight} className='rotate-320 text-3xl focus font-extralight mr-3 text-orange-400' />
          </div>
        </div>
        <div className='w-[70%] h-[200px] rounded-2xl hover:translate-y-1  hover:bg-[#1B1B1B] flex flex-row hover:duration-500  shadow-lg hover:ease-in-out cursor-pointer' onClick={handleSyncwave}>
          <div className=' rounded-2xl flex justify-center items-center object-cover'>
            <img src={Syncwave} alt="" className=' w-[160px] h-[160px] rounded-2xl ' />
          </div>
          <div className='w-[30px]'></div>
          <div className='flex justify-center flex-col flex-1'>
            <h1 className='text-white text-3xl font-semibold'>Syncwave</h1>
            <span className='text-emerald-800'>AI Based Communication Web App</span>
          </div>
          <div className='flex justify-end items-center '>
            <FontAwesomeIcon icon={faArrowRight} className='rotate-320 text-3xl focus font-extralight mr-3 text-orange-400' />
          </div>
        </div>
        <div className='w-[70%] h-[200px] rounded-2xl hover:translate-y-1  hover:bg-[#1B1B1B] flex flex-row hover:duration-500  hover:ease-in-out cursor-pointer' onClick={handleUrlShort}>
          <div className=' rounded-2xl flex justify-center items-center object-cover'>
            <img src={Urlshortner} alt="" className=' w-[160px] h-[160px] rounded-2xl ' />
          </div>
          <div className='w-[30px]'></div>
          <div className='flex justify-center flex-col flex-1'>
            <h1 className='text-white text-3xl font-semibold'>Short URL</h1>
            <span className='text-emerald-800'>Emotion based Music Recommendation Web APP</span>
          </div>

          <div className='flex justify-end items-center'>
            <FontAwesomeIcon icon={faArrowRight} className=' rotate-320 text-3xl focus font-extralight mr-3 text-orange-400' />
          </div>
        </div>

      </div>
  
    </div>
  )
}
