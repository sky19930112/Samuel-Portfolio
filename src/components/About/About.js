import React from 'react'

const About = () => {
    return (
        <div>
            <h1>About Me</h1>
            <img src={require('./Samuel.jpg')}alt="Samuel"className="photo" />
            <br/>
            <>Name: Samuel Hsu</>
            <p>I was once a musician, EMT, luthier, and woodworler. I had been expeirenced several different kind of jobs as advantures. Now this is time for me to start my journey as a software engineer.</p>
        </div>
    )
}

export default About