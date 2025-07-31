'use client'; 
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function Home() {
  const [DarkMode, setDarkMode] = useState(false);
  useEffect(()=>{
  if(localStorage.theme ==='dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ){
    setDarkMode(true);
  }
  else{
    setDarkMode(false);
  }
  },[])
  useEffect(()=>{
   if(DarkMode){
    document.documentElement.classList.add("dark");
    localStorage.theme='dark';
   }else{
    document.documentElement.classList.remove("dark");
    localStorage.theme='';
   }
  },[DarkMode])
  return (
    <>
    <Nav DarkMode={DarkMode} setDarkMode={setDarkMode}/>
    <Header />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}
