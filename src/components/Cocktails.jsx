import React, { useRef } from 'react'
import { cocktailLists } from '../../constants'
import { mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cocktails = () => {
  
    useGSAP(()=>{
         gsap.fromTo(
    ".tails1",
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay:0.3,
      stagger: 0.07,
      ease: "power1.in",
      scrollTrigger: {
        trigger: ".tails",
        start: "top 99%",
        end:'bottom bottom' ,
        once:true,
        scrub:true
        
      },
    }
  )


  gsap.fromTo(
    ".touch1",
    {
      y: 10,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay:0.3,
      stagger: 0.05,
      ease: "power1.in",
      scrollTrigger: {
        trigger: ".touch",
        start: "top bottom",
        end:'bottom bottom',
        once:true,
      },
    }
  )
        const two=gsap.timeline({
        scrollTrigger:{
            trigger:'.touch',
            start:'top 70%',
            end:'bottom top',
            scrub:true
        }
})

      two.fromTo(
  '.leaf1',
  { x: -100,
    y:100
    },
  {
    x: -90,
    y:-600,
    duration:10
  },
    )})
  return (
    <>
      <div className='tails  min-h-screen bg-[url("/noise.png")] flex flex-col md:flex-row  justify-evenly items-center' >
         <div className='p-4'  >
              <p className='text-white'>Most Popular Cocktails</p><br/>
              {cocktailLists.map(({name,detail,country,price})=>(
                     <div className='flex gap-10 items-center tails1'>
                        <div><p className='text-yellow-200 font-bold text-xl'>{name}</p>
                     <p className='text-white'>{country} | {detail}</p></div>
                     <div className='text-white'>{`-${price}`}</div>
                     <div>
                        
                     </div>
                     </div>
                      



              ))}

         </div>
         <div className='touch p-4' >
                  <div>
              <p className='text-white'>Most Loved Cocktails</p><br/>
              {mockTailLists.map(({name,detail,country,price})=>(
                     <div className='flex gap-10 touch1 items-center'>
                        <div><p className='text-yellow-200 font-bold text-xl'>{name}</p>
                     <p className='text-white'>{country} | {detail}</p></div>
                     <div className='text-white'>{`-${price}`}</div>
                     <div>
                        
                     </div>
                     </div>
                      



              ))}
       <div><img src="/cocktail-left-leaf.png" className='leaf1 h-[30vh]  absolute  left-0' alt="" /></div>
         </div>
         </div>
      
      
      
      </div>
    </>
  )
}

export default Cocktails
