import React from 'react';
import memesData from '../memesData';

const Forms = () => {
  // const [memeImage, setMemeImage] = React.useState('https://i.imgflip.com/30b1gx.jpg')

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/30b1gx.jpg'
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memeArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memeArray.length)
    const url = memeArray[randomNumber].url 
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <div className='px-4 py-12 bg-white md:py-24 md:px-32'>
      <div className='flex justify-between'>
        <input 
          type='text' 
          placeholder='Top text'
          name='topText'
          value={meme.topText}
          onChange={handleChange} 
          className='border border-gray-300 rounded-md h-10 md:h-16 w-32 md:w-[40%] md:text-2xl px-4 md:px-6 font-bold' 
            
        />
        <input 
          type='text' 
          placeholder='Bottom text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange} 
          className='border border-gray-300 rounded-md h-10 md:h-16 w-32 md:w-[40%] md:text-2xl px-4 md:px-6 font-bold' 
            
        />
      </div>
      <button 
        onClick={getMemeImage} 
        className='text-sm md:text-2xl w-[100%] bg-gradient-to-r from-[#672280] to-[#A626D3] h-10 md:h-16 rounded-md mt-8 md:mt-12 text-white hover:from-[#471a57] hover:to-[#881ab1]'
      >
      Get a new meme image
      </button>
      <div className='sm:w-full relative md:w-[50%] mx-auto'>
        <img 
          src={meme.randomImage} 
          className='w-full py-4 md:w-[70%]' 
          
        />
        <h2 className='absolute text-5xl font-extrabold text-white font-anton top-8 md:top-12 left-12 md:left-[10%] right-12'>
          {meme.topText}
        </h2>
        <h2 className='absolute text-5xl font-extrabold text-white font-anton bottom-8 left-12 right-12'>
          {meme.bottomText}
        </h2>
      </div>
    </div>
    
  )
}

export default Forms