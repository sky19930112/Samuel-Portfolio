import React, { useState, useEffect }  from 'react'
import {motion} from 'framer-motion'

import './Home.css'

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  const calculateOffset = (factor) => ({
    x: (mousePosition.x - window.innerWidth / 2) * factor,
    y: (mousePosition.y - window.innerHeight / 2) * factor,
  });

  return (
    <motion.div 
    initial={{width:0}} 
    animate={{width:"100%"}} 
    exit={{x:"100%", transition:{duration:1}}}
    name='home' 
    className='current-page relative  w-full h-screen bg-[center_top_9rem]'  
    data-theme="light"
    >
      
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full'>
        
        <motion.h1 
        className="text-8xl font-bold mb-8 relative group cursor-pointer"
        style={{ translateX: calculateOffset(0.02).x, translateY: calculateOffset(0.02).y }}
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
            Samuel Hsu
          </span>
          <span className="absolute inset-0 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </motion.h1>

        <motion.p 
        className="text-4xl mb-6 relative group cursor-pointer"
        style={{ translateX: calculateOffset(0.04).x, translateY: calculateOffset(0.04).y }}
        >
          <span className="relative z-10 transition-all duration-300 group-hover:text-blue-600 ">
            A Full Stack Web Developer
          </span>
          <span className="absolute bottom-0 left-0 w-4/12 h-0.5 bg-blue-300 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </motion.p>

        <motion.p 
        className="text-3xl relative group cursor-pointer overflow-hidden"
        style={{ translateX: calculateOffset(0.06).x, translateY: calculateOffset(0.06).y }}
        >
          <span className="relative z-10 transition-all duration-150  group-hover:text-blue-600">
            Turning Ideas into Interactive Experiences
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 transform translate-y-full transition-transform duration-150 group-hover:translate-y-0 max-w-lg"></span>
        </motion.p>
      </div>
    </motion.div>
 
  )
}

export default Home