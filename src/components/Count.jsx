import React from 'react'

const Count = (props) => {
  return (
    <div className='bg-white w-[80px] mx-auto h-[80px] rounded-[50%] font-bold text-3xl py-5'>
      <h1>{props.number}</h1>
    </div>
  )
}

export default Count