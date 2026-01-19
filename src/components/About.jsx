import { useGSAP } from '@gsap/react'
import React from 'react'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger);


const About = () => {
 useGSAP(() => {
  gsap.from(".sun p", {
    y: 40,
    opacity: 0,
    stagger: 0.08,
    duration: 1,
    ease: "power3.out",
    delay:0.5,
    scrollTrigger: {
      trigger: ".sun",
      start: "top 50%",
    },
  });
   gsap.from(".img3 img", {
    y: 40,
    opacity: 0,
    stagger: 0.08,
    duration: 1,
    ease: "power3.out",
    delay:0.2,
    scrollTrigger: {
      trigger: ".img3",
      start: "top 50%",
    },
  });


  gsap.from(".moon > *", {
    y: 30,
    opacity: 0,
    stagger: 0.08,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".moon",
      start: "top 80%",
    },
  });
});
  return (
    <div className='bg-[url("/noise.png")] min-h-screen overflow-hidden'>
      <div className='flex  justify-evenly items-center'>
        <div className='sun p-4'>
          <a href='#cocktails' className='text-black rounded-4xl px-3 text-sm p-2 bg-white cursor-pointer hover:text-red-500 '>Best Cocktails</a>
             <div className='text-white  text-4xl font-black mt-3'><p>Where every Detail </p>

          <p>Matter-From Muddle</p>
          <p>to Garnish</p></div>
        </div>
        <div className='moon text-white p-10 flex flex-col  justify-center mt-3  text-sm'>
              <p>Every cocktail we serve is a reflection of our </p>
              <p>obsession with detail — from the first muddle to the</p>
              <p>final garnish. That care is what turns a simple drink</p>
              <p>nto something truly memorable.</p>
              <div className='flex justify-evenly w-1/2 pt-4'><p className='text-yellow-500 font-bold text-2xl'>4.5</p><p className='pt-2'> / </p><p className='pt-2.5'>5</p></div>
              <div><p className='text-sm font-light'>More than 12000+ customers</p><div className='bg-stone-400 mt-5 p-5 rounded-xl w-full flex justify-center  items-center md:w-1/2 h-5'><img src="/profile1.png" className='h-7' alt="" /><img src="/profile2.png" className='h-7' alt="" /><img src="/profile3.png" alt="" className='h-7' /><img src="/profile4.png" className='h-7' alt="" /></div></div>
        </div>
      </div><br/>
      <div className='img3 flex flex-col justify-center items-center md:flex-row md:justify-evenly md:flex-wrap'>
        <img src="/abt1.png" className='img1 h-[50%] md:mt-9 md:h-100 md:w-100 w-[50%]' alt="" />
        <div className='img2 bg-black mt-5 rounded-2xl md:w-[55vh] md:h-[50vh] h-[30vh] text-white w-[80%]'>
          <div className='flex flex-col pl-2 md:items-center md:pt-15 justify-center'><p className='pt-4 text-center text-yellow-200 md:text-3xl md:mb-5 font-bold text-xl'>CRAFTED TO IMPRESS</p>
             <div className='flex items-center justify-center pt-4'><img src="/left-arrow.png" className='h-4' alt="" /><p className='text-sm font-light'>Perfectly balanced blends</p></div>
               <div className='flex items-center justify-center pt-4'><img src="/left-arrow.png" className='h-4' alt="" /><p className='text-sm font-light'>Garnished to Perfection</p></div>
                 <div className='flex items-center justify-center pt-4'><img src="/left-arrow.png" className='h-4' alt="" /><p className='text-sm font-light'>Ice cold Everytime</p></div>
                   <div className='flex items-center justify-center pt-4'><img src="/left-arrow.png" className='h-4' alt="" /><p className='text-sm font-light'>Expertly Shaken and Stirred</p></div>
          
          </div>
        </div>
        <img src="/abt5.png" className='img3 h-[50%] w-[50%] md:h-100 md:w-100 mt-5 md:mt-10 rounded-xl' alt="" />
      </div>
         
    </div>
  )
}

export default About
