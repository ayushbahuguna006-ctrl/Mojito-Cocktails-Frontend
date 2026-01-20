import React, { use } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Art = () => { 
  useGSAP(()=>{
    gsap.from('.mask',{
      y:-100,
      opacity:0,
      duration:1,
      ease:'power3.out',
      scrollTrigger:{
        trigger:'.art',
        start:'top 60%',
        end:'bottom bottom'
      }

    })
    gsap.to('.art',{
      opacity:0.3,
      y:100,
      scrollTrigger:{
        trigger:'.this1',
        start:'top top',
        end:'bottom top'
        
      }
    })
    gsap.fromTo('.an1',{
      color:'yellow',
      y:300,
     
    },{
      y:-100,
       scrollTrigger:{
        trigger:'.art',
        start:'top 99%',
        scrub:true
        
      }
    })
  })
  return (
    <div id='work' className='min-h-screen bg-[url("/noise.png")] overflow-hidden flex items-center justify-evenly pt-20 flex-wrap'>
      
      <div>
           <p className='art text-yellow-200 text-center mt-5 font-bold text-8xl '>THE ART <img src="/mask-img.png" className='mask' alt="mask-img" /></p>
        </div>
        <div className='an1'><div><p className='text-white flex items-center'><img src="/check.png" className='h-5 mr-2' alt="" />Handpicked ingredients</p>
        <p className='text-white flex items-center mt-2'><img src="/check.png" className='h-5 mr-2 ' alt="" />Signature techniques</p>
        <p className='text-white flex items-center mt-2'><img src="/check.png" className='h-5 mr-2 ' alt="" />Bartending artistry in action</p>
        <p className='this1 text-white flex items-center mt-2'><img src="/check.png" className='h-5 mr-2 ' alt="" />Freshly muddled flavors</p>
        </div>
        <div className='mt-2'><p className='text-white flex items-center'><img src="/check.png" className='h-5 mr-2' alt="" />Handpicked ingredients</p>
        <p className='text-white flex items-center mt-2'><img src="/check.png" className='h-5 mr-2 ' alt="" />Signature techniques</p>
        <p className='text-white flex items-center mt-2'><img src="/check.png" className='h-5 mr-2 ' alt="" />Bartending artistry in action</p>
        <p className='text-white flex items-center mt-2'><img src="/check.png" className='h-5 mr-2 ' alt="" />Freshly muddled flavors</p>
        </div></div>
    </div>
  )
}

export default Art
