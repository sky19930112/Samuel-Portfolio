import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0e2779]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>My name is Samuel Hsu</p>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
            Full Stack Web Developer who recently earned a certificate in Full Stack Web Development Program from The Coding Boot Camp at UT Austin. Expertise in MERN stack, MVC stack, Node.js, Express.js, MySQL, NoSQL, React.js, PWA, JavaScript, CSS, and HTML. Experienced deploying via git bash to GitHub and Heroku. A penchant problem solver who can search and figure out how to identify the problem and find solutions to achieve the goal.
            </p>

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