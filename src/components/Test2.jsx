import React from 'react'

const Test2 = () => {
  const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2'])

  function addItem() {
    setThingsArray(prevArrayElement => {
      return [...prevArrayElement, `Thing ${prevArrayElement.length + 1}`]
    } )
  }

  const ThingsElement = thingsArray.map(thing => <p>{thing}</p>)
  
  return (
    <div className='text-center'>
      <button onClick={addItem} className='bg-gray-200 w-32 h-12 my-4 rounded-3xl cursor-pointer'>Add Item</button>
      {ThingsElement}
    </div>
  )
}

export default Test2