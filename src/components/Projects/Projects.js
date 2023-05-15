import React from "react";

import HTML from "./HTML.jpg"
import Profolio from "./Profolio.jpg"
import PopQuiz from "./PopQuiz.jpg"
import Scheduler from "./Scheduler.jpg"
import PasswordGenerate from "./PasswordGenerate.jpg"

function Work() {
    return (
      <section>
        <p>Portfolio</p>

        <div>
            <img src={HTML} className="photo" />
            <div class="">
              <a href="https://github.com/sky19930112/HTML-CSS-Challenge">
                <button>GitHub</button>
              </a>
              <a href="https://sky19930112.github.io/HTML-CSS-Challenge/">
                <button>Deployed Website</button>
              </a>
            </div>
        </div>
       
        <div>
            <img src={Profolio} className="photo" />
            <div class="">
              <a href="https://github.com/sky19930112/Portfolios">
                <button>GitHub</button>
              </a>
              <a href="https://sky19930112.github.io/Portfolios/">
                <button>Deployed Website</button>
              </a>
            </div>
        </div>

        <div>
            <img src={PopQuiz} className="photo" />
            <div class="">
              <a href="https://github.com/sky19930112/popQuizzes">
                <button>GitHub</button>
              </a>
              <a href="https://sky19930112.github.io/popQuizzes/">
                <button>Deployed Website</button>
              </a>
            </div>
        </div>

        <div>
            <img src={Scheduler} className="photo" />
            <div class="">
              <a href="https://github.com/sky19930112/DailyScheduler">
                <button>GitHub</button>
              </a>
              <a href="https://sky19930112.github.io/DailyScheduler/">
                <button>Deployed Website</button>
              </a>
            </div>
        </div>

        <div>
            <img src={PasswordGenerate} className="photo" />
            <div class="">
              <a href="https://github.com/sky19930112/password-generator">
                <button>GitHub</button>
              </a>
              <a href="https://sky19930112.github.io/password-generator/">
                <button>Deployed Website</button>
              </a>
            </div>
        </div>

      </section>
    );
  }
  



export default Work;