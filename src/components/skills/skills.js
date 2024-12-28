import React from 'react';
import {motion} from 'framer-motion'
import theme from '../../assets/theme.mkv'
import theme2 from '../../assets/theme2.mkv'



const Skills = () => {
    return (
        <motion.div 
        initial={{width:0}} 
        animate={{width:"100%"}} 
        exit={{x:"100%", transition:{duration:0.1}}}
        name='skills' 
        className='current-page w-full md:h-screen bg-[#5379f5] sm:text-center'>

        <video
            className="background-video absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            src={theme}
            autoPlay
            loop
            muted
            style={{ pointerEvents: "none" }}
        />



        {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                <p className='text-6xl font-bold text-center'>Skills</p>
                </div>
  
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-2xl'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-3xl hover:text-black hover:font-bold'>
                        <p className='my-4'>JavaScript</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-3xl  hover:text-black hover:font-bold'>
                        <p className='my-4'>TypeScript</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-3xl  hover:text-black hover:font-bold'>
                        <p className='my-4'>React. JS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-3xl  hover:text-black hover:font-bold'>
                        <p className='my-4'>Tailwind</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-3xl  hover:text-black hover:font-bold'>
                        <p className='my-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-3xl  hover:text-black hover:font-bold'>
                        <p className='my-4'>NODE JS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-3xl  hover:text-black hover:font-bold'>
                        <p className='my-4'>MangoDB</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-3xl  hover:text-black hover:font-bold'>
                        <p className='my-4'>MERN Stack</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills