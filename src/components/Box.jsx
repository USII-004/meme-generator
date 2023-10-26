import React from 'react'

const Box = (props) => {

  const styles = {
    backgroundColor: props.on ? '#222222' : '#cccccc'
  }

  return (
    <div onClick={props.handleClick} style={styles} className='cursor-pointer w-16 h-8 my-2 border-2 border-gray-400 rounded-lg'></div>
  )
}

export default Box