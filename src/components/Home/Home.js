import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import samuel from './background.jpg'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-black' style={{ backgroundImage: `url(${samuel})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPositionX: '75%',}}>
      <div className='max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full'>
            <p className='text-4xl sm:text-6xl font-bold text-[#c1cdf1] italic'>Samuel Hsu</p>
            <p className='text-[#c1cdf1] py-2 max-w-[500px] sm:text-2xl'>A Full Stack Web Developer</p>
            {/*
            <div>
              <button className='text-white group border-2 ox-6 py-3 my-2 flex items-center hover:bg-red-800'>View Works 
              <div className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></div>
              </button>
            </div>
            */}
      </div>
    </div>
  )
}

export default Home