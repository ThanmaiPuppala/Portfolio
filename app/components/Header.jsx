import Image from 'next/image';
import React from 'react';
import profile from '../../assets/profile.jpg';
import wave from '../../assets/waving-hand.svg';
import { MdOutlineFileDownload } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";
import { motion } from "motion/react";
const Header = () => {
  return (
    <>
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-1'>
        <motion.div 
          initial={{ scale:0}}
          whileInView={{ scale:1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
            <Image src={profile} alt='name' className='rounded-full w-32'/>
        </motion.div>
        <motion.h3 
          initial={{y:-20, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{ duration: 0.6, delay:0.3 }}
          className='flex gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
          Hi! I'm Thanmai Puppala<Image src={wave} alt='name' className='w-6'/>
        </motion.h3>
        <motion.h1 
          initial={{y:-30, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{ duration: 0.8, delay:0.5 }}
          className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
          Frontend Developer <br />based in Vijayawada.
          </motion.h1>
        <motion.p 
         initial={{ opacity:0}}
         whileInView={{opacity:1}}
         transition={{ duration: 0.6, delay:0.7}}
        className='max-w-2xl mx-auto font-Ovo mt-2'>I am a frontend developer from Vijayawada[A.P], skilled in crafting responsive and interactive user interfaces.Willing to relocate and excited to grow with dynamic  teams</motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
             initial={{y:30, opacity:0}}
             whileInView={{y:0, opacity:1}}
             transition={{ duration: 0.6, delay:1 }}
            href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Hire Me<GrFormNextLink className='text-2xl'/></motion.a>
            <motion.a 
             initial={{y:30, opacity:0}}
             whileInView={{y:0, opacity:1.2}}
             transition={{ duration: 0.6, delay:1}}
            href="/Thanmai.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>Resume <MdOutlineFileDownload className='text-2xl'/></motion.a>
        </div>
    </div>
    </>
  )
}

export default Header