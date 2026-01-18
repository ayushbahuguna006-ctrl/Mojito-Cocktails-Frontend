import React from 'react'
import { cocktailLists } from '../../constants'
import { mockTailLists } from '../../constants'

const Cocktails = () => {
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
         <div className='p-4'>
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

         </div>
         </div>
      
      
      
      </div>
    </>
  )
}

export default Cocktails
