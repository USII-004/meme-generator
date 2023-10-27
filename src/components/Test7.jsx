import React from 'react'

const Test7 = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: '',
    isFriendly: true,
    employment: '',
    favColor: ''
  })

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value 
      }
    })
  }

  return (
    <form>
      <input
        onChange={handleChange} 
        type='text'
        name='firstName'
        value={formData.firstName} 
        placeholder='Enter First Name' 
        className='p-2 m-4 border-2' 

      />
      <input
        onChange={handleChange} 
        type='text'
        name='lastName'
        value={formData.lastName} 
        placeholder='Enter Last Name' 
        className='p-2 m-4 border-2' 

      />
      <input
        onChange={handleChange} 
        type='email'
        name='email'
        value={formData.email} 
        placeholder='Enter Email Address' 
        className='p-2 m-4 border-2' 

      />
      <textarea
        onChange={handleChange}
        name='comment'
        value={formData.comment}
        placeholder='Any additional comments here' 
        className='p-2 m-4 border-2'
      />
      <br/>
      <input 
        type='checkbox'
        id='isFriendly'
        name='isFriendly'
        onChange={handleChange}
        checked={formData.isFriendly}
        className='p-2 m-4'
        
      />
      <label htmlFor='isFriendly'>Are you friendly</label>
      <fieldset className='p-2 m-4 border-2'>
        <legend>Curent employment status</legend>
        
        <input 
          type='radio'
          id='unemployed'
          name='employment'
          value='unemployed'
          checked={formData.employment === 'unemployed'}
          onChange={handleChange}
          className='m-2'
          
        />
        <label htmlFor='unemployed'>Unemployed</label>

        <br />
        <input 
          type='radio'
          id='part-time'
          name='employment'
          value='part-time'
          checked={formData.employment === 'part-time'}
          onChange={handleChange}
          className='m-2'
          
        />
        <label htmlFor='part-time'>Part time</label>
        
        <br />
        <input 
          type='radio'
          id='full-time'
          name='employment'
          value='full-time'
          checked={formData.employment === 'full-time'}
          //checked property makes the radio a controlled component  
          onChange={handleChange}
          className='m-2'
          
        />
        <label htmlFor='full-time'>Full time</label>
      </fieldset>
      
      <label htmlFor='favColor' className='m-4'>What is your favorite color?</label>
      <br />
      <select 
        id='favColor' 
        value={formData.favColor}
        onChange={handleChange}
        name='favColor'
        className='p-2 m-4'
        
      >
        <option value=''>-- Choose --</option>
        <option value='red'>Red</option>
        <option value='orange'>Orange</option>
        <option value='yellow'>Yellow</option>
        <option value='green'>Green</option>
        <option value='Blue'>Blue</option>
        <option value='indigo'>Indigo</option>
        <option value='violet'>Violet</option>
      </select>
       
      <p
        className='px-4 text-2xl font-bold'>
        Name: {formData.firstName} 
      </p>
      <p
        className='px-4 text-2xl font-bold'>
        Surname: {formData.lastName} 
      </p>
      <p
        className='px-4 text-2xl font-bold'>
        Email: {formData.email} 
      </p>
      <p
        className='px-4 text-2xl font-bold'>
        Comment: {formData.comment} 
      </p>
      <p
        className='px-4 text-2xl font-bold'>
        Friendly: {formData.isFriendly ? 'Yes' : 'No'} 
      </p>
      <p
        className='px-4 text-2xl font-bold'>
        Employment Status: {formData.employment} 
      </p>
      <p
        className='px-4 text-2xl font-bold'>
        Color: {formData.favColor} 
      </p>
      
    </form>
  )
}

export default Test7