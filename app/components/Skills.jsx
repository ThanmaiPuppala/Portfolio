import Image from 'next/image';
import React from 'react';
import html from '../../public/HTML5.png';
import css from '../../public/CSS3.png';
import javascript from '../../public/JavaScript.png';
import tailwind from '../../public/Tailwind CSS.png';
import react from '../../public/React.png';
import router from '../../public/router.png';
import redux from '../../public/Redux.png';
import next from '../../public/Next.js.png';
import query from '../../public/reactquery.png';
import mui from '../../public/Material UI.png';
import jquery from '../../public/jQuery.png';
import git from '../../public/Git.png';
import typescript from '../../public/TypeScript.png';
import framer from '../../public/framer.png';
import node from '../../public/Node.js.png';
import express from '../../public/Express.png';
import mongo from '../../public/MongoDB.png';
import mysql from '../../public/MySQL.png';
import vite from '../../public/Vite.js.png';
import vscode from '../../public/Visual Studio.png';
import vercel from '../../public/Vercel.png';
import { motion } from "motion/react";
const Skills = () => {
  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // Adjust the delay between each item
   
    },
  },
};

const item = {
  hidden: { x: -50, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.4 } },
};

  return (
    <>
    <motion.div 
    initial={{ opacity:0}}
    whileInView={{opacity:1}}
    transition={{ duration:1 }}
    id='skills' className='w-full px-[12%] py-10 scroll-mt-[120px]'>
        <motion.h4 
          initial={{opacity:0,x:-20}}
          whileInView={{opacity:1,x:0}}
          transition={{ duration:1,delay:0.2 }}
          className='text-center mb-2 text-lg font-Ovo'>
          What I Offer
        </motion.h4>
        <motion.h2 
        initial={{opacity:0,x:20}}
        whileInView={{opacity:1,x:0}}
        transition={{ duration:1,delay:0.2 }}
        className='text-center text-5xl font-Ovo'>Dev Stack</motion.h2>
        <motion.p 
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{ duration:0.8,delay:0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-10 font-Ovo'>Skilled in building modern web apps with React, Next.js, Tailwind, and TypeScript, backed by Node.js, Express, and MongoDB. I use tools like Redux, Git, Vercel, and Framer Motion to deliver optimized, responsive user experiences.</motion.p>
        <motion.div
          className='grid grid-cols-6 md:grid-cols-8 lg:grid-cols-9 gap-6 mt-20'
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          {[html, css, javascript, tailwind, react, router, redux, next, typescript, query, mui, jquery, git, framer, node, express, mongo, mysql, vite, vscode, vercel].map((img, i) => (
            <motion.div variants={item} key={i}>
              <Image
                src={img}
                alt="tech-icon"
                className='w-18 cursor-pointer hover:-translate-y-3 transition-all duration-300 hover:scale-150'
              />
            </motion.div>
          ))}
        </motion.div>

    </motion.div>
    </>
  )
}

export default Skills