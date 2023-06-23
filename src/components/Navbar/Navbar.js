import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-50'>
            <div>
                <h1 style={{width: '100px'}}>Samuel Hsu</h1>
            </div>

          

            <ul className='hidden md:flex'>
                <li className='py-7 text-5xl'>Home</li>
                <li className='py-7 text-5xl'>About</li>
                <li className='py-7 text-5xl'>Projects</li>
                <li className='py-7 text-5xl'>Resume</li>
                <li className='py-7 text-5xl'>Contact</li>
            </ul>


            <div onClick={handleClick} className='md:hidden z-10'>
             <FaBars />
            </div>


            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-gray-50'}>
                <li className='py-7 text-5xl'>Home</li>
                <li className='py-7 text-5xl'>About</li>
                <li className='py-7 text-5xl'>Projects</li>
                <li className='py-7 text-5xl'>Resume</li>
                <li className='py-7 text-5xl'>Contact</li>
            </ul>





            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                        <a className='flex justify-between items-center w-full text-gray-50' herf="/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                        <a className='flex justify-between items-center w-full text-gray-50' herf="/">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                        <a className='flex justify-between items-center w-full text-gray-50' herf="/">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                        <a className='flex justify-between items-center w-full text-gray-50' herf="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar