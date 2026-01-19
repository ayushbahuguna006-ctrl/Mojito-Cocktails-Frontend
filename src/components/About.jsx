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
        <div className='text-white p-10 flex flex-col  justify-center mt-3  text-sm'>
              <p>Every cocktail we serve is a reflection of our </p>
              <p>obsession with detail — from the first muddle to the</p>
              <p>final garnish. That care is what turns a simple drink</p>
              <p>nto something truly memorable.</p>
              <div className='flex justify-evenly w-1/2 pt-4'><p className='text-yellow-500 font-bold text-2xl'>4.5</p><p className='pt-2'> / </p><p className='pt-2.5'>5</p></div>
              <div><p className='text-sm font-light'>More than 12000+ customers</p><div className='bg-stone-400 mt-5 p-5 rounded-xl w-full flex justify-center  items-center md:w-1/2 h-5'><img src="/profile1.png" className='h-7' alt="" /><img src="/profile2.png" className='h-7' alt="" /><img src="/profile3.png" alt="" className='h-7' /><img src="/profile4.png" className='h-7' alt="" /></div></div>
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
         
    </div>
  )
}

export default About
