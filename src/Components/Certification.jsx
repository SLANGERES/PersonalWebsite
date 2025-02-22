import React from 'react'
import hackerrank from '../assets/Expassets/hackerrank-4.svg'
import walmart from '../assets/Expassets/walmart.svg';
import eagames from '../assets/Expassets/ea-games.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



export const Certification = () => {
    const handleEA = () => {
        window.open("https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_H4gvBDSeYRDRrojNy_1738950692372_completion_certificate.pdf", "_blank");
      };
      const handleWalmart = () => {
        window.open("https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_H4gvBDSeYRDRrojNy_1738958755421_completion_certificate.pdf", "_blank");
      };
      const handleHackerRank = () => {
        window.open("https://www.hackerrank.com/certificates/ab8bd43f0e7d", "_blank");
      };

  return (
    <div className='flex flex-col min-h-[1024px]'>
      <div className=' text-white'>
        <div className='font-bold text-8xl tracking-wide '>Experience &</div>
        <div className='font-bold text-8xl tracking-wide text-emerald-800'>Certification</div>
      </div>
      <div className='h-[50px]'>
      </div>
      <div className='flex flex-col space-y-3'>
        <div className='w-[70%] h-[200px] rounded-2xl hover:translate-y-1 hover:bg-[#1B1B1B] hover:duration-500 hover:ease-in-out flex flex-row cursor-pointer ' onClick={handleWalmart}>
          <div className=' rounded-2xl flex justify-center items-center object-cover'>
            <img src={walmart} alt="" className=' w-[160px] h-[160px] rounded-2xl ' />
          </div>
          <div className='w-[30px]'></div>
          <div className='flex justify-center flex-col flex-1'>
            <h1 className='text-white text-3xl font-semibold'>Walmart</h1>
            <span className='text-emerald-800'>Advance Software Engineering Certification</span>
          </div>
          <div className='flex justify-end items-center'>
            <FontAwesomeIcon icon={faArrowRight} className='rotate-320 text-3xl focus font-extralight mr-3 text-orange-400' />
          </div>
        </div>
        <div className='w-[70%] h-[200px] rounded-2xl hover:translate-y-1 hover:bg-[#1B1B1B] hover:duration-500 hover:ease-in-out flex flex-row cursor-pointer ' onClick={handleEA}>
          <div className=' rounded-2xl flex justify-center items-center object-cover'>
            <img src={eagames} alt="" className=' w-[160px] h-[160px] rounded-2xl ' />
          </div>
          <div className='w-[30px]'></div>
          <div className='flex justify-center flex-col flex-1'>
            <h1 className='text-white text-3xl font-semibold'>Electronic Arts</h1>
            <span className='text-emerald-800'>Software Engineering Certification</span>
          </div>

          <div className='flex justify-end items-center'>
            <FontAwesomeIcon icon={faArrowRight} className='rotate-320 text-3xl focus font-extralight mr-3 text-orange-400' />
          </div>
        </div>
        <div className='w-[70%] h-[200px] rounded-2xl hover:translate-y-1 hover:bg-[#1B1B1B] hover:duration-500 hover:ease-in-out flex flex-row cursor-pointer' onClick={handleHackerRank}>
          <div className=' rounded-2xl flex justify-center items-center object-cover'>
            <img src={hackerrank} alt="" className=' w-[160px] h-[160px] rounded-2xl bg-white ' />
          </div>
          <div className='w-[30px]'></div>
          <div className='flex justify-center flex-col flex-1'>
            <h1 className='text-white text-3xl font-semibold'>HackerRank</h1>
            <span className='text-emerald-800'>Problem Solving & 5 star in C++</span>
          </div>
          {/* <div className='w-[160px]'></div> */}
          <div className='flex justify-end items-center '>
            <FontAwesomeIcon icon={faArrowRight} className='text-orange-400 rotate-320 text-3xl focus font-extralight mr-3'/>
          </div>
        </div>

      </div>
  
    </div>
  )
}
