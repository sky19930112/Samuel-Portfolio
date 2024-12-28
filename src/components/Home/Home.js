import React, { useState, useEffect }  from 'react'
import {motion, useMotionValue, useTransform, useAnimation} from 'framer-motion'
import './Home.css'
import Samuel from './MyHead.jpg'

const Home = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const samuelX = useTransform(mouseX, (value) => value * 0.01);
  const samuelY = useTransform(mouseY, (value) => value * 0.01);

  const developerX = useTransform(samuelX, (value) => -value * 5); 
  const developerY = useTransform(samuelY, (value) => -value * 5);

  const ideasX = useTransform(mouseX, (value) => value * 0.08);
  const ideasY = useTransform(mouseY, (value) => value * 0.08);

  const randomControls = useAnimation();

  useEffect(() => {
    let isMounted = true; 
    const animateRandom = async () => {
      while (isMounted) {
        await randomControls.start({
          x: Math.random() * 200 - 100, 
          y: Math.random() * 200 - 100,
          transition: { duration: 2, ease: 'easeInOut' },
        });
      }
    };
    animateRandom();
  
    return () => {
      isMounted = false;
    };
  }, [randomControls]);


  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div 
    initial={{width:0}} 
    animate={{width:"100%"}} 
    exit={{x:"100%", transition:{duration:1}}}
    name='home' 
    className='current-page relative  w-full h-screen bg-[center_top_9rem]'  
    data-theme="light"
    >
      
    <motion.img
            src={Samuel}
            alt="Samuel Background"
            className="absolute top-1/2 right-1/4 w-40 h-40 opacity-50 pointer-events-none transform -translate-y-1/2"
            animate={randomControls}
          />

      <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full'>        
        <motion.h1 
        className="text-8xl font-bold mb-8 relative group cursor-pointer"
        style={{ x: samuelX, y: samuelY }}
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
            Samuel Hsu
          </span>
          <span className="absolute inset-0 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </motion.h1>

        <motion.p 
        className="text-4xl mb-6 relative group cursor-pointer"
        style={{ x: developerX, y: developerY }}
        >
          <span className="relative z-10 transition-all duration-300 group-hover:text-blue-600 ">
            A Full Stack Web Developer
          </span>
          <span className="absolute bottom-0 left-0 w-4/12 h-0.5 bg-blue-300 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </motion.p>

        <motion.p 
        className="text-3xl relative group cursor-pointer overflow-hidden"
        style={{ x: ideasX, y: ideasY }}
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