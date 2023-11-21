import React from "react";

import HTML from "./HTML.jpg"
import Profolio from "./Profolio.jpg"
import PopQuiz from "./PopQuiz.jpg"
import Scheduler from "./Scheduler.jpg"
import PasswordGenerate from "./PasswordGenerate.jpg"

function Projects() {
    return (
        <div name='Projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Works</p>
            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
       
            <div>
              <img src={Profolio} className="photo" />
              <div class="">
                <a href="https://github.com/sky19930112/MusicTheory">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">GitHub</button>
                </a>
                <a href="https://sky19930112.github.io/">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Deployed Website</button>
                </a>
              </div>
            </div>

            <div>
              <img src={} className="photo" />
              <div class="">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">GitHub</button>
                </a>
                <a href="https://github.com/sky19930112/TomatoClock">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Deployed Website</button>
                </a>
              </div>
            </div>

            <div>
              <img src={PopQuiz} className="photo" />
              <div class="">
                <a href="https://github.com/sky19930112/popQuizzes">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">GitHub</button>
                </a>
                <a href="https://sky19930112.github.io/popQuizzes/">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Deployed Website</button>
                </a>
              </div>
            </div>

            <div>
              <img src={Scheduler} className="photo" />
              <div class="">
                <a href="https://github.com/sky19930112/DailyScheduler">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">GitHub</button>
                </a>
                <a href="https://sky19930112.github.io/DailyScheduler/">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Deployed Website</button>
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>   
  )
}
  



export default Projects;