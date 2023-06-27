import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-black text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid-col2 gap-8'>
                    <div className='sm:text-right pd-8 pl-4'>
                        <h1 className='text-4xl font-bold inline border-b-4 border-pink-400'>About Me</h1>
                    </div>
                    <div className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Samuel Hsu</div>
                    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                        <p>Full Stack Web Developer who recently earned a certificate in Full Stack Web Development Program from The Coding Boot Camp at UT Austin. Expertise in MERN stack, MVC stack, Node.js, Express.js, MySQL, NoSQL, React.js, PWA, JavaScript, CSS, and HTML. Experienced deploying via git bash to GitHub and Heroku. A penchant problem solver who can search and figure out how to identify the problem and find solutions to achieve the goal.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About