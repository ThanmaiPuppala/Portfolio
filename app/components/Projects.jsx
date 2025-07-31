import Image from 'next/image';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import spacez from "../../assets/spacez.png";
import react from '../../public/React.png';
import css from '../../public/CSS3.png';
import { SiSwiper } from "react-icons/si";
import evogym from '../../assets/evogym.png';
import ts from '../../public/TypeScript.png';
import tailwind from '../../public/Tailwind CSS.png';
import real from '../../assets/realestate.png';
import chat from '../../assets/chatbot.png';
import exploreo from '../../assets/exploreo.png';
import next from '../../public/Next.js.png';
import luxform from '../../assets/luxform.png';
import redux from '../../public/Redux.png';
import router from '../../public/router.png';
import framer from '../../public/framer.png';
import { motion } from "motion/react";
const Projects = () => {
  return (
   <>
   <motion.div 
   initial={{ opacity:0}}
   whileInView={{opacity:1}}
   transition={{ duration:1 }}
   id='work' className='w-full py-10 scroll-mt-[120px]'>
    <motion.h4 
    initial={{opacity:0,x:-20}}
    whileInView={{opacity:1,x:0}}
    transition={{ duration:1,delay:0.2 }}
    className='text-center mb-2 text-lg font-Ovo'>Projects</motion.h4>
    <motion.h2 
    initial={{opacity:0,x:20}}
    whileInView={{opacity:1,x:0}}
    transition={{ duration:1,delay:0.2 }}
    className='text-center text-5xl font-Ovo'>My Latest Work</motion.h2>
    <motion.p 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{ duration:0.8,delay:0.5}}
    className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Explore a section of my work showcasing practical solutions and intuitive interfaces. Each project highlights my skills in creating responsive, user-friendly, and scalable applications.</motion.p>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-8 items-center justify-items-center'>
        {/* project1 */}
        <motion.div 
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{ duration:1,delay:0.1}}
            className='relative w-fit group overflow-hidden rounded-2xl'>
            <Image src={spacez} alt='spacez' className='w-xl'/> 
            {/* glass content */}
            <div className='absolute inset-0  bg-white/10 backdrop-blur-md text-center opacity-0 group-hover:opacity-100  transition duration-300 ease-in-out z-10 overflow-y-auto sm:overflow-y-scroll px-4 sm:px-2 py-6'>
              <div className='flex flex-col gap-2 justify-center items-center'>
                    <h3 className='text-3xl text-amber-600 font-bold mb-2'>SpaceZ Hotel</h3>
                    <p className='font-Ovo text-sm text-white p-3'>SpaceZ Hotel is a fully responsive hotel booking interface designed for seamless cross-device experience.It features animated transitions, a modern UI layout, and clear call-to-actions.The design emphasizes user engagement through interactive flows and intuitive structure.Demonstrates strong front-end skills in layout, reusability, and UX best practices.</p>
                    <ul className='flex flex-row gap-4'>
                        <Image src={react} alt='react' className='w-12'/>
                        <Image src={css} alt='css' className='w-12'/>
                        <SiSwiper className='text-5xl text-black'/>
                    </ul>
                    <ul className='flex justify-center items-center gap-10 mt-3'>
                        <a href="https://github.com/ThanmaiPuppala/SpaceZ-Hotel-Website"><FaGithub className=' text-white text-4xl bg-amber-600 rounded-3xl bg-opacity-60'/></a>
                        <h3 className='text-white bg-amber-600 rounded-3xl px-4 py-1'>SpaceZ</h3>
                        <a href="https://spacezhotels.vercel.app/" className='flex items-center text-white bg-amber-600 rounded-3xl px-3 py-1'>view<MdOutlineArrowOutward/></a>
                    </ul>
              </div>
            </div>
        </motion.div>
        {/* project2 */}
        <motion.div 
        initial={{opacity:0,x:50}}
        whileInView={{opacity:1,x:0}}
        transition={{ duration:1,delay:0.2 }}
        className='relative w-fit group overflow-hidden rounded-2xl'>
            <Image src={evogym} alt='evogym' className='w-xl'/> 
            {/* glass content */}
            <div className='absolute inset-0  bg-[#FFE1E0]/10 backdrop-blur-md text-center opacity-0 group-hover:opacity-100  transition duration-300 ease-in-out z-10 overflow-y-auto sm:overflow-y-scroll px-4 sm:px-2 py-6'>
              <div className='flex flex-col gap-2 justify-center items-center'>
                    <h3 className='text-3xl text-[#e0615c] font-bold mb-2'>Evo Gym</h3>
                    <p className='font-Ovo text-sm text-black p-3'>Evo Gym is a modern, fully responsive fitness website designed to deliver a smooth and dynamic user experience. It features clean layouts, interactive animations, and a modular architecture optimized for performance and reusability. The project focuses on strong UI/UX practices, clear call-to-action elements, and mobile-first responsiveness.</p>
                    <ul className='flex flex-row gap-4'>
                        <Image src={react} alt='react' className='w-12'/>
                        <Image src={ts} alt='ts' className='w-12'/>
                        <Image src={tailwind} alt='tailwind' className='w-12'/>
                        <Image src={framer} alt='framermotion' className='w-12'/>
                    </ul>
                    <ul className='flex justify-center items-center gap-10 mt-3'>
                        <a href="https://github.com/ThanmaiPuppala/EVO-GYM"><FaGithub className=' text-white text-4xl bg-[#e0615c] rounded-3xl bg-opacity-60'/></a>
                        <h3 className='text-white bg-[#e0615c] rounded-3xl px-4 py-1'>Evo Gym</h3>
                        <a href="https://evo-gym-sooty.vercel.app" className='flex items-center text-white bg-[#e0615c] rounded-3xl px-3 py-1'>view<MdOutlineArrowOutward/></a>
                    </ul>
              </div>
            </div>
        </motion.div>
        {/* project3 */}
        <motion.div 
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{ duration:1,delay:0.3}}
            className='relative w-fit group overflow-hidden rounded-2xl'>
            <Image src={real} alt='realestate' className='w-xl'/> 
            {/* glass content */}
            <div className='absolute inset-0  bg-[#814b95]/10 backdrop-blur-md text-center opacity-0 group-hover:opacity-100  transition duration-300 ease-in-out z-10 overflow-y-auto sm:overflow-y-scroll px-4 sm:px-2 py-6'>
              <div className='flex flex-col gap-2 justify-center items-center'>
                    <h3 className='text-3xl text-[#814b95] font-bold mb-2'>Real Estate</h3>
                    <p className='font-Ovo text-sm text-white p-3.5'>The Real Estate website is a sleek, fully responsive platform designed to showcase properties with an intuitive user interface.It features property listings, search functionality, and modern layouts that enhance the overall user experience.With strong focus on visual hierarchy and clean aesthetics, it ensures seamless browsing across all devices.</p>
                    <ul className='flex flex-row gap-4'>
                        <Image src={react} alt='react' className='w-12'/>
                        <Image src={tailwind} alt='tailwind' className='w-12'/>
                    </ul>
                    <ul className='flex justify-center items-center gap-10 mt-3'>
                        <a href="https://github.com/ThanmaiPuppala/Real-Estate"><FaGithub className=' text-white text-4xl bg-[#814b95] rounded-3xl bg-opacity-60'/></a>
                        <h3 className='text-white bg-[#814b95] rounded-3xl px-4 py-1'>Real Estate</h3>
                        <a href="https://real-estate-ivory-gamma.vercel.app" className='flex items-center text-white bg-[#814b95] rounded-3xl px-3 py-1'>view<MdOutlineArrowOutward/></a>
                    </ul>
              </div>
            </div>
        </motion.div>
        {/* project4 */}
        <motion.div 
        initial={{opacity:0,x:50}}
        whileInView={{opacity:1,x:0}}
        transition={{ duration:1,delay:0.4}}
        className='relative w-fit group overflow-hidden rounded-2xl'>
            <Image src={chat} alt='chatbot' className='w-xl'/> 
            {/* glass content */}
            <div className='absolute inset-0  bg-[#37415c]/10 backdrop-blur-md text-center opacity-0 group-hover:opacity-100  transition duration-300 ease-in-out z-10 overflow-y-auto sm:overflow-y-scroll px-4 sm:px-2 py-6'>
              <div className='flex flex-col gap-2 justify-center items-center'>
                    <h3 className='text-3xl text-[#37415c] font-bold mb-2'>Chat Bot</h3>
                    <p className='font-Ovo text-sm text-black p-3'>An interactive chatbot designed to simulate human-like conversations for enhanced user engagement.It provides instant responses, handles queries efficiently, and supports multi-turn conversations.Built with a focus on natural language understanding and responsive UI design.Demonstrates skills in API integration, dynamic state handling, and conversational UX.</p>
                    <ul className='flex flex-row gap-4'>
                        <Image src={react} alt='react' className='w-12'/>
                        <Image src={css} alt='css' className='w-12'/>
                    </ul>
                    <ul className='flex justify-center items-center gap-10 mt-3'>
                        <a href="https://github.com/ThanmaiPuppala/ChatBot"><FaGithub className=' text-white text-4xl bg-[#37415c] rounded-3xl bg-opacity-60'/></a>
                        <h3 className='text-white bg-[#37415c] rounded-3xl px-4 py-1'>Chat Bot</h3>
                        <a href="https://chat-bot-kappa-roan.vercel.app" className='flex items-center text-white bg-[#37415c] rounded-3xl px-3 py-1'>view<MdOutlineArrowOutward/></a>
                    </ul>
              </div>
            </div>
        </motion.div>
        {/* project5 */}
        <motion.div 
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{ duration:1,delay:0.5}}
            className='relative w-fit group overflow-hidden rounded-2xl'>
            <Image src={exploreo} alt='exploreo' className='w-xl'/> 
            {/* glass content */}
            <div className='absolute inset-0  bg-[#2c98a0]/10 backdrop-blur-md text-center opacity-0 group-hover:opacity-100  transition duration-300 ease-in-out z-10 overflow-y-auto sm:overflow-y-scroll px-4 sm:px-2 py-6'>
              <div className='flex flex-col gap-2 justify-center items-center'>
                    <h3 className='text-3xl text-[#2c98a0] font-bold mb-2'>Exploreo</h3>
                    <p className='font-Ovo text-sm text-white p-3'>Exploreo is a modern travel website designed for users to discover destinations and plan adventures with ease.It features a responsive layout, interactive carousels, and smooth navigation for an engaging browsing experience.It reflects strong front-end skills and attention to user-centered design principles</p>
                    <ul className='flex flex-row gap-4'>
                        <Image src={react} alt='react' className='w-12'/>
                        <Image src={next} alt='next' className='w-12'/>
                        <Image src={ts} alt='ts' className='w-12'/>
                        <Image src={tailwind} alt='tailwind' className='w-12'/>
                        
                    </ul>
                    <ul className='flex justify-center items-center gap-10 mt-3'>
                        <a href="https://github.com/ThanmaiPuppala/Exploreo"><FaGithub className=' text-white text-4xl bg-[#2c98a0] rounded-3xl bg-opacity-60'/></a>
                        <h3 className='text-white bg-[#2c98a0] rounded-3xl px-4 py-1'>Exploreo</h3>
                        <a href="https://exploreo-woad.vercel.app" className='flex items-center text-white bg-[#2c98a0] rounded-3xl px-3 py-1'>view<MdOutlineArrowOutward/></a>
                    </ul>
              </div>
            </div>
        </motion.div>
        {/* project6 */}
        <motion.div 
            initial={{opacity:0,x:50}}
            whileInView={{opacity:1,x:0}}
            transition={{ duration:1,delay:0.6}}
            className='relative w-fit group overflow-hidden rounded-2xl'>
            <Image src={luxform} alt='luxform' className='w-xl'/> 
            {/* glass content */}
            <div className='absolute inset-0  bg-[#702c2b]/10 backdrop-blur-md text-center opacity-0 group-hover:opacity-100  transition duration-300 ease-in-out z-10 overflow-y-auto sm:overflow-y-scroll px-4 sm:px-2 py-6'>
              <div className='flex flex-col gap-2 justify-center items-center'>
                    <h3 className='text-3xl text-[#702c2b] font-bold mb-2'>Lux Form</h3>
                    <p className='font-Ovo text-sm text-black p-3'>LuxForm is a premium interior design website showcasing luxury furniture and decor collections.It features a responsive, elegant layout with smooth transitions and interactive UI components.Built with modern web technologies, it highlights clean design and strong front-end development skills.</p>
                    <ul className='flex flex-row gap-4'>
                        <Image src={react} alt='react' className='w-12'/>
                        <Image src={redux} alt='redux' className='w-12'/>
                        <Image src={router} alt='router' className='w-12'/>
                        <Image src={tailwind} alt='tailwind' className='w-12'/>
                        
                    </ul>
                    <ul className='flex justify-center items-center gap-10 mt-3'>
                        <a href="https://github.com/ThanmaiPuppala/LuxForm"><FaGithub className=' text-white text-4xl bg-[#702c2b] rounded-3xl bg-opacity-60'/></a>
                        <h3 className='text-white bg-[#702c2b] rounded-3xl px-4 py-1'>Lux Form</h3>
                        <a href="https://lux-form.vercel.app" className='flex items-center text-white bg-[#702c2b] rounded-3xl px-3 py-1'>view<MdOutlineArrowOutward/></a>
                    </ul>
              </div>
            </div>
        </motion.div>
    </div>  
   </motion.div>
   </>
  )
}

export default Projects