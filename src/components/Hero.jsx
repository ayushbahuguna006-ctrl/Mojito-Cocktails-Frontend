import React from 'react'

const Hero = () => {
  return (
    <>
      <section className='relative bg-[url("/noise.png")]  size-full min-h-screen'>
                <h1 className='text-center p-7 font-black text-white text-6xl'>MOJITO</h1>
                <img src="/hero-left-leaf.png" className='absolute bottom-0 left-0 h-[30vh]' alt="" />
                 <img src="/hero-right-leaf.png" className='absolute right-0 h-[20vh] top-80' alt="" />
      </section>
    </>
  )
}

export default Hero
