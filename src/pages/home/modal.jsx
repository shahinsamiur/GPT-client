import React from 'react'
import { FaFacebook, FaGithub, FaGoogle, FaYahoo } from "react-icons/fa";
import { } from "react-icons/fa";
export default function Modal() {
  return (
    <div className=' w-[100%] h-screen flex items-center  flex-col bg-gray-900 text-white relative z-[100]'>
      <h1>chatFat0.1</h1>


      <div className=' relative  w-[90%] h-[50%] md:h-[55%]  top-[35%] md:w-[60%] lg:w-[30%]  flex items-center justify-center flex-col'>
        <h1 className='relative top-[-30px] text-[20px]  w-[90%] '>Login With</h1>
        <div className='w-[90%] h-[10%] bg-gray-700 flex text-[22px] items-center justify-center flex-row mb-6 cursor-pointer rounded-xl'>google <FaGoogle className='text-[23px] ml-3 text-[red]' />
        </div>
        <div className='w-[90%] h-[10%] text-[22px] bg-gray-700 flex items-center justify-center flex-row mb-6 cursor-pointer rounded-xl'>Facebook
        <FaFacebook className='text-[23px] ml-3 text-[red]' />
        </div>
        <div className='w-[90%] h-[10%] text-[22px]  bg-gray-700 flex items-center justify-center flex-row mb-6 cursor-pointer rounded-xl'>Github
        <FaGithub className='text-[23px] ml-3 text-[red]' />
        </div>
        <div className='w-[90%] h-[10%] text-[22px] bg-gray-700 flex items-center justify-center flex-row mb-6 cursor-pointer rounded-xl'>Yahoo
        <FaYahoo className='text-[23px] ml-3 text-[red]' />
        </div>
      </div>

    </div>
  )
}
