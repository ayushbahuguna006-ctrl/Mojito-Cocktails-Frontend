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
    const one=gsap.timeline({
        scrollTrigger:{
            trigger:'.heromain',
            start:'top top',
            end:'bottom top',
            scrub:true,
        }
    });
    one.to('.leftleaf',{
        y:-200,
    },0)
    one.to('.rightleaf',{
        y:200
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
                            <div className='subtitle'><h3 className='text-white text-sm font-light absolute top-[35vh] left-[11vh] hidden md:block'>Cool.Crisp,Classic.</h3>
                            <h1 className='text-yellow-200 text-4xl font-bold mt-3 absolute left-[10vh]  hidden md:block top-[40vh]'>Sip The Spirit </h1>
                            <h1 className='text-yellow-200 text-4xl font-bold mt-1 absolute left-[10vh]  hidden md:block top-[46vh]'>Of Summer </h1></div>
                            <div className='subtitle text-white flex flex-col absolute top-[55vh] right-[10vh] hidden md:block'><div>Every cocktail on our menu,</div> is a blend of premium ingredients, creative flair, <div>and timeless recipes — designed to delight your senses
                               <div className='mt-5'><a href="#cocktails">View Cocktails</a></div> </div> </div>
                        </div> 
                    </div>
                 </div>
      </section>
    </>
  )
}

export default Hero
