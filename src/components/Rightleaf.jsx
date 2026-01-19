import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Rightleaf = () => {
    useGSAP(()=>{
         const one=gsap.timeline({
        scrollTrigger:{
            trigger:'.heromain',
            start:'top 10%',
            end:'bottom top',
            scrub:true,
        }
    });
    one.to('.rightleaf',{
        y:600,
        
        
    },0)
    })
  return (
    <div>
       <img src="/hero-right-leaf.png" className='rightleaf absolute right-0 h-[20vh] top-80' alt="" />
    </div>
  )
}

export default Rightleaf
