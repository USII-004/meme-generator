import React from 'react'

const Test = () => {
  const [isGoingOut, setIsGoingOut] = React.useState(true)

  function handleClick() {
    setIsGoingOut(prevState => !prevState)
  }

  return (
    <div>
      <h1 className='font-bold text-2xl'>Do I feel like going out tonight</h1>
      <div onClick={handleClick} className='mx-auto font-bold py-3 bg-white rounded-[100%] w-[50px] h-[50px] text-center cursor-pointer'>
        <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
      </div>
    </div>
  )
}

export default Test