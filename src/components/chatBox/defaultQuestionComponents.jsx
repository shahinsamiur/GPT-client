import React,{useContext} from 'react'
import {UserContext} from "../contextApi/context"
export default function DefaultQuestionComponents({message}) {
    const {addMessage}=useContext(UserContext)
    const handleOnclick=()=>{
       
        addMessage(message)
    }
  return (
   <>
    <div className=' relative flex justify-start mt-3 p-2 items-start w-[80%] md:w-[55%] lg:w-[50%] h-[44px] bg-slate-500 rounded-lg cursor-pointer overflow-auto' onClick={handleOnclick}>{message}</div>
   
   
   </>
  )
}
