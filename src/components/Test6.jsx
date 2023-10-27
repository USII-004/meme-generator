import React from 'react'

const Test6 = () => {
  const [messages, setMessages] = React.useState(['a', 'b'])

  return (
    <div>
      {/* my solution to the challenge */}
      {/* {messages.length ? <p className='font-bold text-2xl'>You have {messages.length} unread message{messages.length > 1 && 's'}</p> : <p className='font-bold text-2xl'>You are all caught up </p>} */}

      {/* tutors solution */}
      {
        messages.length === 0 ?
        <p className='font-bold text-2xl'>You are all caught up </p> :
        <p className='font-bold text-2xl'>You have {messages.length} unread
        message{messages.length > 1 && 's'}</p> 
      }
    </div>
  )
}

export default Test6