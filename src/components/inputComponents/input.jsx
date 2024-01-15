import React, { memo, useContext, useRef, useState } from 'react'
import { TbSend } from "react-icons/tb";
import {UserContext} from"../contextApi/context"
 function Input() {

    const [text,setText]=useState("")
    const {addMessage}=useContext(UserContext)
    const InputRef=useRef()


  
    

    const handleClick=(event)=>{
        setText(event.target.value)
    }

const handleSubmit=(e)=>{
    e.preventDefault() 
    if(text.trim()!==""){
    addMessage(text)
    setText("")
    InputRef.current.value=""
    }
}


  return (
    <form  className='relative bg-gray-700 top-[90%] py-1 h-[auto] w-[100%]  ' onSubmit={handleSubmit}>
    <input placeholder='type here ' className='inline-block w-[90%]  h-[auto] p-2 text-[16px] outline-none bg-inherit' onChange={handleClick} ref={InputRef}/>
    <div className='inline-flex relative justify-center  items-center w-[9%] h-[100%] cursor-pointer' onClick={handleSubmit}>
    <TbSend className='inline-block text-[25px]'/>
    </div>
   
    </form>
  )
}
export default memo(Input)