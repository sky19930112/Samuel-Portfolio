import React from 'react';
import {motion} from 'framer-motion'




const Skills = () => {
    return (
        <motion.div initial={{width:0}} animate={{width:"100%"}} exit={{x:"100%", transition:{duration:0.1}}}
        name='skills' className='w-full h-screen bg-[#5379f5] text-gray-300 sm:text-center'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold '>Skills</p>
                <p className='py-4 text-2xl'>These are the technologies I am proficient in </p>
            </div>
  
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    
                    <p className='my-4'>React. JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   
                    <p className='my-4'>Express JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   
                    <p className='my-4'>MERN Stack</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    
                    <p className='my-4'>GitHub</p>
                </div>
            </div>
        </div>
      </motion.div>
    )
}

export default Skills