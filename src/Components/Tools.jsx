import React from 'react'

import cpp from '../assets/Svgs/cpp-svgrepo-com.svg'

import docker from '../assets/Svgs/docker-svgrepo-com.svg'

import reactnative from '../assets/Svgs/icons8-react-native.svg'
import nodejs from '../assets/Svgs/node-js-svgrepo-com.svg'
import postman from '../assets/Svgs/postman-icon-svgrepo-com.svg'
import tailwind from '../assets/Svgs/tailwind-svgrepo-com.svg'
import reactjs from '../assets/Svgs/reactjs-svgrepo-com.svg'

import langchain from '../assets/Svgs/langchain-seeklogo.svg'



export const Tools = () => {
  return (
    <div className='flex flex-col w-full min-h-[1024px]'>
        <div className=' flex flex-col '>
            <div className='text-8xl font-bold tracking-wide text-white'>PREMIUM</div>
            <div className='text-8xl font-bold tracking-wide  text-emerald-800'>TOOLS</div>
        </div>
        <div className='h-[100px]'>

        </div>
        <div className='space-y-10 w-[70%]'>
          <div className='flex flex-row justify-between'>
              <div className='flex flex-row w-[50%]'>
                <div className='w-[100px] h-[100px] rounded-2xl bg-white '>
                  <img src={cpp} alt="" className='w-[100px] h-[100px]'/>
                </div>
                <div className='h-full w-[20px]'></div>
                <div className='flex flex-col justify-center'>
                    <span className='text-white'>C++</span>
                    <span className='text-emerald-800'>Programming Language</span>
                </div>
              </div>
              <div className='flex flex-row w-[50%]'>
                <div className='w-[100px] h-[100px] rounded-2xl bg-white '>
                  <img src={docker} alt="" className='w-[100px] h-[100px]'/>
                </div>
                <div className='h-full w-[20px]'></div>
                <div className='flex flex-col justify-center'>
                    <span className='text-white'>Docker</span>
                    <span className='text-emerald-800'>Containerization Tool</span>
                </div>
              </div>
          </div>
          <div className='flex flex-row justify-between'>
              <div className='flex flex-row w-[50%]'>
                <div className='w-[100px] h-[100px] rounded-2xl bg-white '>
                  <img src={reactjs} alt="" className='w-[100px] h-[100px]'/>
                </div>
                <div className='h-full w-[20px]'></div>
                <div className='flex flex-col justify-center'>
                    <span className='text-white'>ReactJs</span>
                    <span className='text-emerald-800'>JavaScript library </span>
                </div>
              </div>
              <div className='flex flex-row w-[50%]'>
                <div className='w-[100px] h-[100px] rounded-2xl bg-white '>
                  <img src={reactnative} alt="" className='w-[100px] h-[100px]'/>
                </div>
                <div className='h-full w-[20px]'></div>
                <div className='flex flex-col justify-center'>
                    <span className='text-white'>React Native</span>
                    <span className='text-emerald-800'>Mobile app framework</span>
                </div>
              </div>
          </div>
          <div className='flex flex-row justify-between'>
              <div className='flex flex-row w-[50%]'>
                <div className='w-[100px] h-[100px] rounded-2xl bg-white '>
                  <img src={postman} alt="" className='w-[100px] h-[100px]'/>
                </div>
                <div className='h-full w-[20px]'></div>
                <div className='flex flex-col justify-center'>
                    <span className='text-white'>Postman</span>
                    <span className='text-emerald-800'>API testing tool</span>
                </div>
              </div>
              <div className='flex flex-row w-[50%]'>
                <div className='w-[100px] h-[100px] rounded-2xl bg-white '>
                  <img src={nodejs} alt="" className='w-[100px] h-[100px]'/>
                </div>
                <div className='h-full w-[20px]'></div>
                <div className='flex flex-col justify-center'>
                    <span className='text-white'>NodeJs</span>
                    <span className='text-emerald-800'>JavaScript runtime</span>
                </div>
              </div>
          </div>
          <div className='flex flex-row justify-between'>
              <div className='flex flex-row w-[50%]'>
                <div className='w-[100px] h-[100px] rounded-2xl bg-white '>
                  <img src={tailwind} alt="" className='w-[100px] h-[100px]'/>
                </div>
                <div className='h-full w-[20px]'></div>
                <div className='flex flex-col justify-center'>
                    
                    <span className='text-white'>Tailwind</span>
                    <span className='text-emerald-800'>CSS utility framework</span>
                </div>
              </div>
              <div className='flex flex-row w-[50%]'>
                <div className='w-[100px] h-[100px] rounded-2xl bg-white '>
                  <img src={langchain} alt="" className='w-[100px] h-[100px]'/>
                </div>
                <div className='h-full w-[20px]'></div>
                <div className='flex flex-col justify-center'>
                    <span className='text-white'>Langchain</span>
                    <span className='text-emerald-800'>framework for LLM applications.</span>
                </div>
              </div>
          </div>

        </div>  

    </div>
  )
}
