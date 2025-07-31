import Image from 'next/image';
import React from 'react';
import mail from '../../public/mail.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
const Footer = () => {
  return (
    <div className='mt-8'>
        <div className='text-center '>
            <p className='text-xl mx-auto my-10'>Thanmai Puppala</p>
            <div className='w-max flex items-center gap-2 mx-auto -mt-10'>
                <Image src={mail} alt='mail'className='w-8'/> 
                thanmaipuppala05@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-2 py-3'>
            <p>© 2025 Thanmai Puppala.All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-2 sm:mt-0'>
                <li><a href="https://github.com/ThanmaiPuppala" target='_blank'><FaGithub /></a></li>
                <li><a href="https://www.linkedin.com/in/thanmaipuppala" target='_blank'><FaLinkedin /></a></li>
                <li><a href="" target='_blank'><MdOutlineMailOutline /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer