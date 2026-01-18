import React from 'react'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(SplitText);
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
    useGSAP(()=>{
    const herosplit=new SplitText('.hero',{type:'chars'});
    const paragraphsplit=new SplitText('.subtitle',{type:'lines'})
    gsap.from(herosplit.chars,{
        yPercent:100,
        duration:1.8,
        ease:'expo.out',
        stagger:0.05
    });
    gsap.from(paragraphsplit.lines,{
     yPercent:80,
     delay:1,
     opacity:0,
     duration:1,
     ease:'expo.out',
     stagger:0.05

    })
   gsap.fromTo(
  '.dot',
  { x: 0, opacity: 1 },
  {
    x: 100,
    opacity: 1,
    repeat: -1,
    duration: 1,
    ease: 'power1.inOut'
  },
)
const two=gsap.timeline({
        scrollTrigger:{
            trigger:'.drink2',
            start:'top 99%',
            end:'top 0%',
            scrub:true
        }
})
two.to('.drink2',{
    opacity:0,
})
          

    const one=gsap.timeline({
        scrollTrigger:{
            trigger:'.heromain',
            start:'top 10%',
            end:'bottom top',
            scrub:true,
        }
    });
    one.to('.leftleaf',{
        y:-200,
        rotate:30,
        x:-50
       
    },0)
     one.to('.drink2',{
        y:100,
        
    },0)
    one.to('.rightleaf',{
        y:300,
        rotate:-5,
        x:5
        
    },0)

    })
    
  return (
    <>
      <section className='heromain relative bg-[url("/noise.png")]  size-full min-h-screen'>
                <h1 className='hero text-center p-7 font-black text-white text-6xl'>MOJITO</h1>
                <img src="/hero-left-leaf.png" className='leftleaf absolute bottom-0 left-0 h-[30vh]' alt="" />
                 <img src="/hero-right-leaf.png" className='rightleaf absolute right-0 h-[20vh] top-80' alt="" />
                 <div>
                    <div>
                        <div>
                            <div className='subtitle'><h3 className=' text-yellow-200 text-3xl font-black md:absolute md:top-[40vh] md:font-light md:text-sm md:text-white md:left-[11vh] absolute top-[55vh] left-[10vh] md:block hidden'>Cool  Crisp    Classic</h3>
                            <h1 className='text-yellow-200 text-4xl font-bold mt-3 md:absolute md:left-[10vh]   md:block md:top-[45vh] absolute left-[20vh] top-[30vh] hidden'>Sip The Spirit </h1>
                            <h1 className='text-yellow-200 text-4xl font-bold mt-1 md:absolute md:left-[10vh]   md:block md:top-[51vh]  left-[23vh] hidden'>Of Summer </h1></div>
                            <div className='subtitle text-white  md:absolute md:top-[55vh] md:right-[10vh] p-2 md:block'><div>Every cocktail on our menu,</div> is a blend of premium ingredients, creative flair, <div>and timeless recipes — designed to delight your senses
                               <div className='mt-5'><a href="#cocktails" className='text-red-500 hover:bg-blue-500 hover:rounded-xl hover:p-2 hover:text-black hover:font-bold transition-all duration-75 ease-in'>View Cocktails</a><div className='dot bg-red-200  h-0.5 w-0.5'></div><div><img src="/drink2.png" className='drink2 md:absolute md:right-[70vh] md:top-[1vh]' alt="drink" /></div></div> </div> </div>
                        </div> 
                    </div>
                 </div>
      </section>
    </>
  )
}

export default Hero
