import React from 'react'
import boxesArray from '../boxes'
import Box from './Box'

const Test5 = () => {

  const [boxes, setBoxes] = React.useState(boxesArray)


  // below is an imperative way of writing the toggle function
  
  // function toggle(id) {
  //   setBoxes(prevBox => {
  //     const newBox = []
  //     for(let i = 0; i < prevBox.length; i++) {
  //       const currentBox = prevBox[i]
  //       if(currentBox.id === id) {
  //         const updatedBox = {
  //           ...currentBox,
  //           on: !currentBox.on
  //         }
  //         newBox.push(updatedBox) 
  //       }else {
  //         newBox.push(currentBox) 
  //       }
  //     }
  //     return newBox
  //   })
  // }

  // below is a declarative way of writing the toggle function

  function toggle(id) {
    setBoxes(prevBox => {
      return prevBox.map(box => {
        return box.id === id ? {...box, on: !box.on} : box
      })
    })
  }

  const boxesElement = boxes.map(item => (
    <Box 
    handleClick={() => toggle(item.id)} 
    key={item.id} 
    on={item.on}
     />
  ))

  return (
    <div className='grid grid-cols-3 px-4'>
      {boxesElement}
    </div>
  )
}

export default Test5