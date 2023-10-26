import React from 'react'
import User from '../img/user.png'
import Star from './Star'

const Test3 = () => {
  const [contact, setContact] = React.useState( {
    firstName: 'John',
    lastName: 'Doe',
    phone: '+234811112223',
    email: 'johndoe23445@mmail.com',
    isFavorite: false
  }) 
   
  function toggleFavorite() {
    setContact(prevContact => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite
      }
    }) 
  }
  
  return (
    <div className='py-12 max-w-[400px] mx-auto shadow-md'>
      <img src={User} className='w-32 md:w-[50%] mx-auto' />
      <div className='p-6'>
        <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
        <h2 className='py-2 text-2xl font-bold'>{contact.firstName} {contact.lastName}</h2>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>
    </div>
  )
}

export default Test3