import React, { useState } from 'react'
import { motion } from "motion/react";
const Contact = () => {
    const [result, setResult] =useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "553795ec-37f6-44de-a2b8-ee415a904f6b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }); 

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
   <motion.div 
   initial={{ opacity:0}}
   whileInView={{opacity:1}}
   transition={{ duration:1 }}
   className='w-full px-[12%] py-10 scroll-mt-[120px]' id='contact'>
    <motion.h4 
    initial={{opacity:0,x:-20}}
    whileInView={{opacity:1,x:0}}
    transition={{ duration:1,delay:0.2 }}
    className='text-center mb-2 text-lg font-Ovo'>Connect with me</motion.h4>
    <motion.h2 
     initial={{opacity:0,x:20}}
    whileInView={{opacity:1,x:0}}
    transition={{ duration:1,delay:0.2 }}
    className='text-center text-5xl font-Ovo'>Get In Touch</motion.h2>
    <motion.p 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{ duration:0.8,delay:0.5}}
    className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I'm actively looking for job opportunities..Whether it’s a job opportunity, a freelance gig, or just feedback on my work don't hesitate to get in touch. I'm always open to new conversations, collaborations, or even tech talk.I’m excited to connect and contribute to impactful teams.</motion.p>
    <motion.form 
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{ duration:0.9,delay:0.1}}
    onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
            <motion.input 
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{ duration:0.6,delay:0.9}}
            type="text" placeholder='Enter your name' required 
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#3f3e3e]' name='name'/>
            <motion.input 
            initial={{opacity:0,x:50}}
            whileInView={{opacity:1,x:0}}
            transition={{ duration:0.6,delay:1.0}}
            type="email" placeholder='Enter your email' required 
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#3f3e3e]'name='email'/>
        </div>
        <motion.textarea 
         initial={{opacity:0,y:100}}
         whileInView={{opacity:1,y:0}}
         transition={{ duration:0.6,delay:1.1}}
        rows='6' placeholder='Enter your message' required
        className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#3f3e3e] mb-6'name='message'></motion.textarea>
        <motion.button 
         whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{duration: 0.3 }}
        type='submit' className='w-full  bg-black/80 text-white text-xl rounded-[35px] px-5 py-1.5 hover:bg-black duration-500 dark:bg-[#3f3e3e] dark:text-[#FFA500] '>Submit</motion.button>
        <p className='mt-4'>{result}</p>
    </motion.form>
   </motion.div>
    </>
  )
}

export default Contact