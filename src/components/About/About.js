import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0e2779] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid-col2 gap-8'>
                    <div className='sm:text-center'>
                        <h1 className='text-8xl font-bold'>About Me</h1>
                    </div>
                    <div className='text-4xl sm:text-3xl font-bold text-[#ccd6f6]'>Samuel Hsu</div>
                    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                        <p>A full Stack Web Developer with a certificate from The Coding Boot Camp at UT Austin (Center for Professional Education). Proficient in a range of technologies including the MERN stack, React JS, Node.js, Express.js, NoSQL, React.js, JavaScript, CSS, and HTML. Skilled in deployment using git bash to GitHub and Heroku. I thrive on tackling challenges, employing problem-solving skills to identify issues and craft effective solutions to meet objectives.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About