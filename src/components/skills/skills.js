import React from 'react';

/*
import HTML from '..\image\html.jpg';
import CSS from '..\image\css.png';
import JavaScript from '..\image\JavaScript.png';
import Node from '..\image\Node.png';
import GitHub from '..\image\GitHub.png';
import ReactImg from '..\image\React.png';
import Mongo from '..\image\MongoDB.png';
import Python from '..\image\Python.png';
*/


const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0e2779] text-gray-300'>
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
      </div>
    )
}

export default Skills