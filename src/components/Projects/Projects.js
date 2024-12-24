import React from "react";

import MusicPage from "./MusicPage.png"
import PopQuiz from "./PopQuiz.jpg"
import Scheduler from "./Scheduler.jpg"
import PasswordGenerate from "./PasswordGenerate.jpg"
import {motion} from 'framer-motion'

function Projects() {
    return (
        <motion.div 
        initial={{width:0}} 
        animate={{width:"100%"}} 
        exit={{x:"100%", transition:{duration:0.1}}}
        name='Projects' 
        className='current-page w-full md:h-screen text-gray-300 bg-[#0e2779]'>
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
              <p className='text-6xl font-bold text-gray-300 text-center'>Projects</p>
            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
       
            <div className="hover:scale-110 duration-500">
              <img src={MusicPage} className="photo" />
              <div class="btn">
                <a href="https://github.com/sky19930112/MusicTheory">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:scale-125 duration-500">GitHub</button>
                </a>
                <a href="https://sky19930112.github.io/MusicTheory/">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:scale-125 duration-500">Deployed Website</button>
                </a>
              </div>
            </div>
            <div className="hover:scale-110 duration-500">
              <img src={PopQuiz} className="photo" />
              <div class="btn">
                <a href="https://github.com/sky19930112/popQuizzes">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:scale-125 duration-500">GitHub</button>
                </a>
                <a href="https://sky19930112.github.io/popQuizzes/">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:scale-125 duration-500">Deployed Website</button>
                </a>
              </div>
            </div>
            <div className="hover:scale-110 duration-500">
              <img src={Scheduler} className="photo" />
              <div class="btn">
                <a href="https://github.com/sky19930112/DailyScheduler">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:scale-125 duration-500">GitHub</button>
                </a>
                <a href="https://sky19930112.github.io/DailyScheduler/">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:scale-125 duration-500">Deployed Website</button>
                </a>
              </div>
            </div>
            <div className="hover:scale-110 duration-500">
              <img src={PasswordGenerate} className="photo" />
              <div class="btn">
                <a href="https://github.com/sky19930112/password-generator">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:scale-125 duration-500">GitHub</button>
                </a>
                <a href="https://sky19930112.github.io/password-generator/">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:scale-125 duration-500">Deployed Website</button>
                </a>
              </div>
            </div>
        </div>
      </div>
    </motion.div>   
  )
}
  



export default Projects;