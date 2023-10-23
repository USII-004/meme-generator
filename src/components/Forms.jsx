import React from 'react'

const Forms = () => {
  return (
    <div className='py-12 md:py-24 bg-white px-4 md:px-32'>
      <form>
        <div className='flex justify-between'>
          <input type='text' className='border border-gray-300 rounded-md h-10 md:h-16 w-32 md:w-[40%] md:text-2xl' />
          <input type='text' className='border border-gray-300 rounded-md h-10 md:h-16 w-32 md:w-[40%] md:text-2xl' />
        </div>
        <button className='text-sm md:text-2xl w-[100%] bg-gradient-to-r from-[#672280] to-[#A626D3] h-10 md:h-16 rounded-md mt-8 md:mt-12 text-white hover:from-[#471a57] hover:to-[#881ab1]'>Get a new meme image</button>
      </form>
    </div>
  )
}

export default Forms