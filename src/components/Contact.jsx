import { useGSAP } from '@gsap/react'
import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    useGSAP(()=>{
        gsap.from('.final',{
            opacity:0,
            y:20,
            stagger:0.1,
            delay:0.5,
            scrollTrigger:{
                trigger:'.final2',
                start:'top 80%',
               
            }
        })
    })
  return (
    <div className='final1 min-h-screen bg-[url("/noise.png")] overflow-hidden flex flex-col text-white items-center justify-center'>
      <div><div><p className='font-black text-4xl text-center final text-yellow-300'>Where to Find Us</p></div>
      <div><p className='bg-red-500 final rounded-xl text-center p-2 opacity-60 mt-10 text-yellow-100'>Visit our store</p></div>
      <div><p className='font-semibold final text-center text-lg'>456, Raq Blvd. #404, Los Angeles, CA 90210</p></div>
      <div><p className='bg-red-500 final rounded-xl p-2 mt-5 text-center opacity-60 text-yellow-100'>Contact us</p></div>
      <div><p className='font-semibold final text-center text-lg'>(555) 987-6543</p></div>
      <div><p className='font-semibold final text-center text-lg'>hello@jsmcocktail.com</p></div>
      <div><p className='bg-red-500 final text-center mt-5 rounded-xl p-2 opacity-60 text-yellow-100'>Open every day</p></div>
      <div><p className='font-semibold final text-center text-lg'>Mon-Thu : 11:00am - 12am</p></div>
      <div><p className='font-semibold final text-center text-lg'>Fri : 11:00am - 2am</p></div>
      <div><p className='font-semibold final text-center text-lg'>Sun : 9:00am - 1 am</p></div>
      <div><p className='bg-red-500 final text-center mt-5 rounded-xl p-2 px-3 opacity-60 text-yellow-100'>Socials</p></div>
      <div>
          <div className='flex justify-center mt-5 final2'>
            <a href=""><img src="/x.png" className='mx-5' alt="" /></a>
            <a href=""><img src="/insta.png" alt="" /></a>
            <a href=""><img src="/fb.png" className='mx-5' alt="" /></a>
          </div></div>
      </div>
    </div>
  )
}

export default Contact
