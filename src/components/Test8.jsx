import React from 'react'

const Test8 = () => {
  const [formData, setFormData] = React.useState(
    {
      email: '',
      password: '',
      confirmPassword: '',
      joinNewsLetter: true
    }
  )

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(formData.password === formData.confirmPassword) {
      console.log('Successfully signed up')
    }else {
      console.log('Passwords do not match')
      return
    }

    if(formData.joinNewsLetter) {
      console.log('Thanks for joining newsletter')
    }
  }

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='email address'
          className='p-2 m-4 border-2'

        />
        <br />
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='input password'
          className='p-2 m-4 border-2'

        />
        <br />
        <input
          type='password'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder='confrim password'
          className='p-2 m-4 border-2'

        />
        <br />
        <input 
          type='checkbox'
          id='joinNewsLetter'
          name='joinNewsLetter'
          checked={formData.joinNewsLetter}
          onChange={handleChange}
          className='m-4'

        />
        <label htmlFor='joinNewsLetter'>I want to join the newsletter</label>
        <br />
        <button 
          className='p-2 m-4 text-white bg-blue-600 rounded-md'
        >
          Submit form
        </button>
        
      </form>
    </div>
  )
}

export default Test8