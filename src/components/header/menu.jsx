import React,{memo,useContext} from 'react'
import {NavLink } from 'react-router-dom';
import { HiMiniInboxStack } from "react-icons/hi2";
import { UserContext } from "../contextApi/context";
import "./header.css"
 function Menu() {



  const {modal } = useContext(UserContext);
  return (
    <> <div className={`fixed text-white z-50 pt-0 p-1 float-right w-[80%] md:w-[20%] bg-gray-900 h-full md:bg-gray-900 md:flex md:flex-col ${!modal?"translate-x-[-100%]":"translate-x-[0]"} ease-linear duration-[0.4s]`}>
      <div className='bg-inherit w-[100%] h-16 mb-10 text-[20px] flex justify-center items-center border-b-2 border-dashed'>
        <HiMiniInboxStack className='text-white text-[20px] mr-2' />
        more</div>

        <NavLink
     
        activeclassname="active"
        className={`bg-inherit w-[100%] h-16 mb-2 text-[16px] flex justify-center items-center cursor-pointer `}
        to="/"
      >
        Chat Box
      </NavLink>


      <NavLink
        className={`bg-inherit w-[100%] h-16 mb-2 text-[16px] flex justify-center items-center cursor-pointer `}
         to="/d"
      >
        Play Song
      </NavLink>



      <NavLink
        className={`bg-inherit w-[100%] h-16 mb-2 text-[16px] flex justify-center items-center cursor-pointer `}
        to="/x"
      >
        Create Image
      </NavLink>



      <NavLink
        className={`bg-inherit w-[100%] h-16 mb-2 text-[16px] flex justify-center items-center cursor-pointer `}
        to="/k"
      >
        Search 
      </NavLink>
    </div>
    </>

  )
}


export default memo(Menu)