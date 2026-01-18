import React from 'react'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(SplitText);

const Hero = () => {
    useGSAP(()=>{
    const herosplit=new SplitText('.hero',{type:'chars'});
    const paragraphsplit=new SplitText('.subtitle',{type:'lines'})
    gsap.from(herosplit.chars,{
        yPercent:100,
        duration:1.8,
        ease:'expo.out',
        stagger:0.05
    })


    })
    
  return (
    <>
      <section className='relative bg-[url("/noise.png")]  size-full min-h-screen'>
                <h1 className='hero text-center p-7 font-black text-white text-6xl'>MOJITO</h1>
                <img src="/hero-left-leaf.png" className='absolute bottom-0 left-0 h-[30vh]' alt="" />
                 <img src="/hero-right-leaf.png" className='absolute right-0 h-[20vh] top-80' alt="" />
                 <div>
                    <div>
                        <div>
                            <div className='subtitle'><h3 className='text-white text-sm font-light absolute top-[50vh] left-[10vh] hidden md:block'>Cool.Crisp,Classic.</h3>
                            <h1 className='text-yellow-200 text-4xl font-bold mt-3 absolute left-[10vh]  hidden md:block top-[52vh]'>Sip The Spirit </h1>
                            <h1 className='text-yellow-200 text-4xl font-bold mt-1 absolute left-[10vh]  hidden md:block top-[60vh]'>Of Summer </h1></div>
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
