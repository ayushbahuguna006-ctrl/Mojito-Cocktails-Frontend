import React from 'react'

const About = () => {
  return (
    <div className='bg-[url("/noise.png")] min-h-screen overflow-hidden'>
      <div className='flex  justify-evenly items-center'>
        <div className='p-4'>
          <button className='text-black rounded-4xl px-3 text-sm p-2 bg-white '>Best Cocktails</button>
             <div className='text-white  text-4xl font-black mt-3'><p>Where every Detail </p>

          <p>Matter-From Muddle</p>
          <p>to Garnish</p></div>
        </div>
        <div className='text-white p-10 flex flex-col  justify-center  text-sm'>
              <p>Every cocktail we serve is a reflection of our </p>
              <p>obsession with detail — from the first muddle to the</p>
              <p>final garnish. That care is what turns a simple drink</p>
              <p>nto something truly memorable.</p>
              <div className='flex justify-evenly w-1/2 pt-4'><p className='text-yellow-500 font-bold text-2xl'>4.5</p><p className='pt-2'> / </p><p className='pt-2.5'>5</p></div>
              <p className=''>More than 12000+ customers</p>
        </div>
      </div>
         
    </div>
  )
}

export default About
