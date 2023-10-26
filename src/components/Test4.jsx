import React from 'react'
import Count from './Count'

const Test4 = () => {
  const [count, setCount] = React.useState(0)

  function add() {
    setCount(prevState => prevState + 1)
  }

  function subtract() {
    setCount(prevState => prevState - 1)
  }


  return (
    <div className='max-w-[300px] bg-gray-400 mx-auto text-center py-4 flex my-6'>
      <button onClick={subtract} className='cursor-pointer bg-black rounded-[50%] text-white font-bold text-xl w-[40px] h-[40px] my-12 ml-16'>-</button>
      <Count number={count} />
      <button onClick={add} className='cursor-pointer bg-black rounded-[50%] text-white font-bold text-xl w-[40px] h-[40px] my-12 mr-16'>+</button>
    </div>
  )
}

export default Test4