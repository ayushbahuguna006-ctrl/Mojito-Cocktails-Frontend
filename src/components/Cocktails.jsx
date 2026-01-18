import React from 'react'
import { cocktailLists } from '../../constants'
import { mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cocktails = () => {
    useGSAP(()=>{
        const two=gsap.timeline({
        scrollTrigger:{
            trigger:'.touch',
            start:'top 80%',
            end:'bottom 20%',
            scrub:true
        }
})
      two.fromTo(
  '.leaf1',
  { x: -100,
    y:300
    },
  {
    x: -60,
    y:0,
    ease: 'power1.inOut'
  },
    )})
  return (
    <>
      <div className='min-h-screen bg-[url("/noise.png")] flex flex-col md:flex-row  justify-evenly'>
         <div className='p-4'>
              <p className='text-white'>Most Popular Cocktails</p><br/>
              {cocktailLists.map(({name,detail,country,price})=>(
                     <div className='flex gap-10 items-center'>
                        <div><p className='text-yellow-200 font-bold text-xl'>{name}</p>
                     <p className='text-white'>{country} | {detail}</p></div>
                     <div className='text-white'>{`-${price}`}</div>
                     <div>
                        
                     </div>
                     </div>
                      



              ))}

         </div>
         <div className='relative touch p-4'>
                  <div>
              <p className='text-white'>Most Loved Cocktails</p><br/>
              {mockTailLists.map(({name,detail,country,price})=>(
                     <div className='flex gap-10 items-center'>
                        <div><p className='text-yellow-200 font-bold text-xl'>{name}</p>
                     <p className='text-white'>{country} | {detail}</p></div>
                     <div className='text-white'>{`-${price}`}</div>
                     <div>
                        
                     </div>
                     </div>
                      



              ))}
       <div><img src="/cocktail-left-leaf.png" className='leaf1 h-[30vh]  absolute bottom-0 left-0' alt="" /></div>
         </div>
         </div>
      
      
      
      </div>
    </>
  )
}

export default Cocktails
