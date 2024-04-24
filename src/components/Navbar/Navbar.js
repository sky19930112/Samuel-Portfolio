import React, { useState } from 'react';

import { Link } from "react-router-dom";
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from './logo.png'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-50'>
            <div>
                <img src={logo} style={{ width: '90px', height: '80px' }}/>
            </div>

          

            <ul className='hidden md:flex'>
                <li>
                    <Link to='/' smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to='/about' smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link to='/skills' smooth={true} duration={500}>Skills</Link>
                </li>
                <li> 
                    <Link to='/Projects' smooth={true} duration={500}>Projects</Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>


            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-gray-50'}>
                <li className='py-7 text-5xl'>
                    <Link onClick={handleClick} to='/' smooth={true} duration={500}>Home</Link>
                </li>
                <li className='py-7 text-5xl'>
                    {' '}
                    <Link onClick={handleClick} to='/about' smooth={true} duration={500}>About</Link>
                </li>
                <li className='py-7 text-5xl'>
                    {' '}
                    <Link onClick={handleClick} to='/skills' smooth={true} duration={500}>Skills</Link>
                </li>
                <li className='py-7 text-5xl'>
                    {' '}
                    <Link onClick={handleClick} to='/Projects' smooth={true} duration={500}>Projects</Link>
                </li>
                <li className='py-7 text-5xl'>
                    {' '}
                    <Link onClick={handleClick} to='/contact' smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>




            {/* links */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800 rounded-full'>
                        <a className='flex justify-between items-center w-full text-gray-50' href="https://www.linkedin.com/in/samuel-hsu-b9a73b241/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800 rounded-full'>
                        <a className='flex justify-between items-center w-full text-gray-50' href="https://github.com/sky19930112">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800 rounded-full'>
                        <a className='flex justify-between items-center w-full text-gray-50' href={require("./Resume.pdf")}>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar