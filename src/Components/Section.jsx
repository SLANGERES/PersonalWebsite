import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons'

import { Project } from './Project'
import { Tools } from './Tools'
import { Certification } from './Certification'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export const Section = () => {
    const handleResume = () => {
        window.open("https://drive.google.com/file/d/1Zy3-wGcd2kXJYKxHeaPc8WV9hjquMgpF/view?usp=sharing", "_blank");
      };
  return (
    
    <div className='flex flex-col cursor-pointer'>
        <div className='mt-30 '>
            <div className='text-white font-bold text-8xl'>
                SOFTWARE
            </div>
            <div className='text-emerald-800 font-bold text-8xl' >
                DEVELOPER
            </div>
        </div>
        <div className='h-[50px]'>

        </div>
        <div className='text-left text-emerald-200 w-[70%] text-2xl font-extralight tracking-wide'>
        A passionate software developer who transforms ideas into scalable and efficient solutions. From crafting seamless user experiences to building robust backend systems, I thrive on clean code, innovation, and solving complex problems with creativity and precision.
        </div>
        <div className='h-[50px]'>

        </div>
        <div className='flex justify-between w-[70%]'>
            <div className='flex flex-col'>
                <span className='text-white text-6xl font-bold'>150+</span>
                <span className='text-emerald-800'>DSA Problem</span>
                <span className='text-emerald-800'>Solved</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-white text-6xl font-bold'>10+</span>
                <span className='text-emerald-800'>Projects</span>
                <span className='text-emerald-800'>Completed</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-white text-6xl font-bold'>5000+</span>
                <span className='text-emerald-800'>Line of Code</span>
            </div>
        </div>
        <button className=' w-[70%] h-[100px] mt-10 rounded-2xl flex justify-start hover:bg-[#1B1B1B] hover:translate-y-1 hover:duration-500  hover:ease-in-out cursor-pointer  p-3 ' onClick={handleResume}>
            <FontAwesomeIcon icon={faFile} className='text-white text-6xl' />
            <span className='text-white text-left mt-5 ml-3 text-3xl flex-1'>Resume</span>
            <div className='flex flex-1 justify-end items-center'>
                <FontAwesomeIcon icon={faArrowRight} className='rotate-320 text-3xl focus font-extralight text-orange-400' />
            </div>
        
        </button>
        <div className='h-[100px]'>
        </div>
    </div>

  )
}
