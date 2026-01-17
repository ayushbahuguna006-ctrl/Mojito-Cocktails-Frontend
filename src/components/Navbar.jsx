import React from 'react'
import { navLinks } from '../../constants'

const Navbar = () => {
  return (
    <nav>
        <div className='min-h-screen bg-black'> 
            <a href="#home" className='flex justify-center gap-2 items-center p-3 text-white'>
               <img src="./src/assets/logo.png" alt="Logo" />
               <p className='text-xl font-semibold'>Velvet Pour</p> </a>
               <ul className='flex text-white justify-center gap-5'>
                {navLinks.map((link)=>(<li key={link.id}><a href={`#${link.id}`}>{link.title}</a></li>))}
               </ul>

           
        </div>
    </nav>
  )
}

export default Navbar
