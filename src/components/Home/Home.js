import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import samuel from './background.jpg'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.div initial={{width:0}} animate={{width:"100%"}} exit={{x:"100%", transition:{duration:0.1}}}
    name='home' className='w-full h-screen bg-black bg-[center_top_9rem]'  style={{ backgroundImage: `url(${samuel})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPositionX: '75%',}}>
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full'>
        
        <h1 className="text-8xl font-bold mb-8 relative group cursor-pointer">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-[#c1cdf1]">
            Samuel Hsu
          </span>
          <span className="absolute inset-0 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </h1>

        <p className="text-4xl mb-6 relative group cursor-pointer ">
          <span className="relative z-10 transition-all duration-300 group-hover:text-blue-600 text-[#c1cdf1]">
            A Full Stack Web Developer
          </span>
          <span className="absolute bottom-0 left-0 w-4/12 h-0.5 bg-blue-300 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </p>

        <p className="text-3xl relative group cursor-pointer overflow-hidden">
          <span className="relative z-10 transition-all duration-150 text-[#c1cdf1] group-hover:text-blue-600">
            Turning Ideas into Interactive Experiences
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 transform translate-y-full transition-transform duration-150 group-hover:translate-y-0 max-w-lg"></span>
        </p>
            {/*
            <div>
              <button className='text-white group border-2 ox-6 py-3 my-2 flex items-center hover:bg-red-800'>View Works 
              <div className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></div>
              </button>
            </div>
            */}
      </div>
    </motion.div>
  )
}

export default Home