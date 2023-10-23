import React from 'react'
import Trollface from '../img/trollface.png';

const Navbar = () => {
  return (
    <nav className='text-white flex justify-between bg-gradient-to-r from-[#672280] to-[#A626D3] h-16 md:h-24'>
      <div  className='flex items-center mx-auto md:mx-24'>
        <img src={Trollface} className='w-12 md:w-24' />
        <h2 className='self-center px-4 md:px-6 font-bold md:text-3xl'>Meme Generator</h2>
      </div>
      <p className='hidden md:block text-2xl px-32 self-center'> React Course - Project 3</p>
    </nav>
  )
}

export default Navbar