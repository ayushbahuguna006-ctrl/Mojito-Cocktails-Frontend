import React from 'react'
import { navLinks } from '../../constants'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);



const Navbar = () => {
  useGSAP(()=>{
    const navTween=gsap.timeline({
      scrollTrigger:{
        trigger:'nav',
        start:'bottom top'
      }
    })
    navTween.fromTo('nav',{backgroundColor:'transparent'},{
    backgroundColor:'#00000050',
    z:2,
    backgroundFilter:'blur(10px)',
    duration:1,
    ease:'power1.inOut'

    })



  })
  return (
    <div className='size-full sticky top-0 bg-[url("/noise.png")]'>
     
     <nav className='flex flex-wrap justify-around'>
        <div className='flex items-center justify-center gap-1 p-2'>
          <img src="/logo.png" alt="Mojito" />
          <p className='font-bold text-white'>VELVET POUR</p>
        </div>
        <div className='flex gap-6 items-center'>
          {navLinks.map((link)=>(<a className='list-none text-white' href={`#${link.id}`}>{link.title}</a>))}
        </div>



      </nav>

    </div>
  )
}

export default Navbar
