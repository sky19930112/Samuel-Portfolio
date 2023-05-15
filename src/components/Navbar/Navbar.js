import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]'>
            <div>
                <h1>Samuel Hsu</h1>
            </div>


            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={500}>Projects</Link>
                </li>
                <li>
                    <Link to='resume' smooth={true} duration={500}>Resume</Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar