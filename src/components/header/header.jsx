import React, { memo, useContext } from 'react';
import { UserContext } from "../contextApi/context";
import "./header.css";
import Menu from './menu';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
function Header() {
  const { modal, setModal } = useContext(UserContext); // Note the import statement here

  const handleClick = () => {
    if (modal === true) setModal(false);
    else setModal(true)

  };

  return (
    <>
      <div className='w-[100%] h-14 bg-gray-900 text-white flex items-center justify-center md:h-16 lg:h-20 md:text-[24px] lg:text-[30px]'>
        <div className='md:flex md:bg-inherit z-50 text-center items-center text-[25px]'>
          ChatFat
        </div>

        {!modal ? <div
          className='relative text-white left-[30%] text-[20px] md:hidden '
          onClick={handleClick}
        >
          <CiMenuFries className='text-white' />
        </div>

          :
          <div
            className='relative text-white left-[30%] text-[20px] md:hidden '
            onClick={handleClick}
          >
            <IoMdClose />
          </div>}



      </div>

      <Menu />
    </>
  );
}

export default memo(Header);
