import React from 'react'
import DefaultQuestionComponents from './defaultQuestionComponents'
export default function WelcomeChatboxComponents() {
  return (
    <div className='flex w-[100%] h-[100%]   justify-center items-center flex-col'>
        <h1 className='text-[20px]'>Welcome on chatFat 0.1 !</h1>
      <div className='flex w-[80%] mt-10 md:w-[90%] lg:w-[70%] justify-center items-center  h-[40%] md:h-[50%]   flex-col'>

    <DefaultQuestionComponents message="what is current weather update ?"/>
    <DefaultQuestionComponents message=" play a song for me ?"/>
    <DefaultQuestionComponents message="how to make a presentation for me ?"/>
    <DefaultQuestionComponents message="who is samiur shahin ?"/>
      </div>
    </div>
  )
}
