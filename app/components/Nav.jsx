import Image from 'next/image';
import React, {  useEffect, useState } from 'react';
import log from '../../assets/log.png';
import { FaRegMoon } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { CiLight } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
const Nav = ({DarkMode,setDarkMode}) => {
  const [openMenu, setOpenMenu] = useState(false);
   useEffect(()=>{
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);   
  const [isScroll, setIsScroll] = useState(false);
  return (
    <>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 shadow-md  ${isScroll ?"bg-white bg-opacity-40 backdrop-blur-lg shadow-sm dark:bg-[#1e1e1e] dark:bg-opacity-40" : ""}`}>
        <a href="#top">
            <Image src={log} alt="Thanmai"  className='w-22 mr-14 rounded-full' />
        </a>
     
        <ul className='hidden md:flex items-center gap-6 font-semibold lg:gap-8 rounded-full px-12 py-3 bg-white dark:bg-[#3f3e3e] shadow-sm bg-opacity-20'>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#work">My Work</a></li>
            <li className='lg:hidden'><a href="#contact">Contact</a></li>
            
        </ul> 
        
        <div className='flex items-center gap-4 lg:gap-6'>
            <button onClick={()=>setDarkMode(prev=>!prev)}>{DarkMode?<CiLight className='text-2xl'/>:<FaRegMoon className='text-xl'/>}</button>
            <a href="#contact" className='hidden lg:flex px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact</a>
            <button className='block md:hidden ml-3' onClick={()=>setOpenMenu(true)}><CgMenuGridO className='text-3xl'/></button>
        </div>
        {/* mobile menu */}
    </nav>
  {openMenu && (
        <ul className=' fixed  right-4 z-50 flex md:hidden flex-col items-center gap-6 bg-[#fffafa] dark:bg-darkTheme dark:border dark:border-gray-500 shadow-md font-semibold rounded-lg px-8 py-6  top-20  w-[300px] h-[320px] transition duration-500 '>
          <div className='absolute right-6 top-4'>
            <RxCross2 className='text-3xl cursor-pointer' onClick={() => setOpenMenu(false)} />
          </div>
          <li onClick={() => setOpenMenu(false)} className='mt-4'><a href="#top">Home</a></li>
          <li onClick={() => setOpenMenu(false)}><a href="#about" >About Me</a></li>
          <li onClick={() => setOpenMenu(false)}><a href="#skills" >Skills</a></li>
          <li onClick={() => setOpenMenu(false)}><a href="#work" >My Work</a></li>
          <li onClick={() => setOpenMenu(false)}><a href="#contact" >Contact</a></li>
        </ul>
      )
    }
    </>
  )
}

export default Nav