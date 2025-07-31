import Image from 'next/image';
import React from 'react';
import profile from '../../assets/profile.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
const About = () => {
  return (
   <>
   <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-[120px]'
    initial={{ opacity:0}}
    whileInView={{opacity:1}}
    transition={{ duration:1 }}
   >
    <motion.h4 
    initial={{opacity:0,y:-20}}
    whileInView={{opacity:1,y:0}}
    transition={{ duration:1,delay:0.2 }}
    className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
    <motion.h2 
    initial={{opacity:0,y:-20}}
    whileInView={{opacity:1,y:0}}
    transition={{ duration:0.5,delay:0.5 }}
    className='text-center text-5xl font-Ovo'>About Me</motion.h2>
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{ duration:0.8}}
    className='flex flex-col lg:flex-row items-center gap-10 my-20'>
        <motion.div 
         initial={{opacity:0,scale:0.9}}
         whileInView={{opacity:1,scale:1}}
         transition={{ duration:0.6 }}
        className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={profile} alt='profile' className='w-full rounded-3xl'/>
        </motion.div>
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ duration:0.6,delay:0.8}}
         className='flex-1'>
            <p className='mb-6 max-w-2xl font-Ovo'>I am a frontend developer with a solid grasp of modern web technologies, I specialize in building responsive and high-performance user interfaces using strong UI development skills . I’m proactively learning and expanding my expertise to include backend development with Node.js, Express, MongoDB, and MySQL aiming to become a well-rounded, full-stack developer. With a passion for clean code and seamless user experiences, I’m ready to contribute from day one and grow within a dynamic development team.</p>
            
                <motion.ul 
                 initial={{opacity:0}}
                 whileInView={{opacity:1}}
                 transition={{ duration:0.8,delay:1}}
                className='grid grid-cols-1 sm:grid-cols-3 gap-6 font-Ovo max-w-2xl'>
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer shake-on-hover hover:bg-lightHover dark:border dark:border-white dark:hover:bg-[#1a1a1a]'>
                        <a href="https://www.linkedin.com/in/thanmaipuppala" ><FaLinkedin className='w-7 mt-2 mx-auto text-blue-800 text-2xl hover:text-blue-800 transition-all duration-300 hover:scale-150'/></a>
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-[#FFA500]'>my Linkedin Profile</h3>

                    </li>
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer shake-on-hover hover:bg-lightHover dark:border dark:border-white dark:hover:bg-[#1a1a1a] '>
                        <FaGraduationCap className='w-7 mt-2 mx-auto text-2xl hover:text-black dark:hover:text-[#FFA500] transition-all duration-300 hover:scale-150'/>
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-[#FFA500]'>B.Tech in ECE(2023)</h3>
                        
                    </li>
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer shake-on-hover  hover:bg-lightHover dark:border dark:border-white dark:hover:bg-[#1a1a1a]'>
                        <a href="https://github.com/ThanmaiPuppala"><FaGithub className='w-7 mt-2 mx-auto text-2xl text-orange-600  hover:text-orange-600 transition-all duration-300 hover:scale-150'/></a> 
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-[#FFA500]'>my GitHub Profile</h3> 
                    </li>
                </motion.ul>
            
        </motion.div>
    </motion.div>
    </motion.div>
   </>
  )
}

export default About