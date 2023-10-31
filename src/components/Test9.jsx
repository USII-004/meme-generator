import React from 'react'

const Test9 = () => {

  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(0)


  React.useEffect(function() {
    console.log('Effect function ran')
  }, [count])

  return (
    <div>
      <h2>The count is {count}</h2>
      <button
        onClick={() => {setCount(prevState => (prevState = prevState + 1))}}
        className='p-2 m-4 bg-gray-400'
      >
        Add
      </button>
    </div>
  )
}

export default Test9