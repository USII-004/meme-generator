import React from 'react'
import starEmpty from '../img/star-empty.png'
import starFilled from '../img/star-filled.png'

const Star = (props) => {

  let starIcon = props.isFilled ? `${starFilled}` : `${starEmpty}`

  return (
    <div>
      <img onClick={props.handleClick} src={starIcon} className='w-8 cursor-pointer' />
    </div>
  )
}

export default Star