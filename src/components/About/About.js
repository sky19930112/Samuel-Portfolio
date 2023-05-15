import React from 'react'

const About = () => {
    return (
        <div>
            <h1>About Me</h1>
            <img src={require('./Samuel.jpg')}alt="Samuel"className="photo" />
            <br/>
            <>Name: Samuel Hsu</>
            <p>
            Full Stack Web Developer who recently earned a certificate in Full Stack Web Development Program from The Coding Boot Camp at UT Austin. Expertise in MERN stack, MVC stack, Node.js, Express.js, MySQL, NoSQL, React.js, PWA, JavaScript, CSS, and HTML. Experienced deploying via git bash to GitHub and Heroku. A penchant problem solver who can search and figure out how to identify the problem and find solutions to achieve the goal.
            </p>
        </div>
    )
}

export default About