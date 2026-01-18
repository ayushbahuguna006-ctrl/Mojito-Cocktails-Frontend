import React from 'react'

const Hero = () => {
  return (
    <>
      <section className='relative bg-[url("/noise.png")]  size-full min-h-screen'>
                <h1 className='text-center p-7 font-black text-white text-6xl'>MOJITO</h1>
                <img src="/hero-left-leaf.png" className='absolute bottom-0 left-0 h-[30vh]' alt="" />
                 <img src="/hero-right-leaf.png" className='absolute right-0 h-[20vh] top-80' alt="" />
                 <div>
                    <div>
                        <div>
                            <h3 className='text-white text-sm font-light absolute top-[38vh] left-[2vh] hidden md:block'>Cool.Crisp,Classic.</h3>
                            <h1 className='text-yellow-200 text-4xl font-bold mt-3 absolute left-[2vh]  hidden md:block top-[40vh]'>Sip The Spirit </h1>
                            <h1 className='text-yellow-200 text-4xl font-bold mt-1 absolute left-[2vh]  hidden md:block top-[47vh]'>Of Summer </h1>
                            
                        </div>
                    </div>
                 </div>
      </section>
    </>
  )
}

export default Hero
