import React, {useState}  from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png'

import {Link} from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const handleClick = () => setNav(!nav);
  
  
  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center flex-end px-4 bg-[#3c8d93] text-gray-300'>
        <div>
        <a href="">
        <img className='h-[100px]' src={Logo} alt="Logo Picture" style={{width: '100px'}} />
        </a>
              
        </div>
        
        {/* Menu */}
        
          <ul className='hidden md:flex'>
            <li>
            <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={500}>
          About
        </Link>
            </li>
            <li>
            <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
            </li>
            <li>
            <Link to="work" smooth={true} duration={500}>
          Work
        </Link>
            </li>
            <li>
            <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
            </li>

          </ul>
        


        {/*Hamburger Wheel */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes/>}
        </div>
          {/* Mobile Menu */}
        
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#3c8d93] flex flex-col justify-center items-center'}>
            <li className='py-4 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link> 
            </li>
            <li className='py-4 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link> 
            </li>
            <li className='py-4 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link> 
            </li>
            <li className='py-4 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
          Work
        </Link> 
            </li>
            <li className='py-4 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link>
            </li>
            
          </ul>
        

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#639cd9]' >
              <a className='flex justify-between items-center w-full text-gray-300' 
              href="https://www.linkedin.com/in/benjamin-kwingwa-lidman-b94843170/">
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#000]'>
              <a className='flex justify-between items-center w-full text-gray-300 ' 
              href="https://github.com/BenKLDEV">
                Github <FaGithub size={30}/>
              </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#4bb39a]'>
              <a className='flex justify-between items-center w-full text-gray-300 ' 
              href="mailto:Benjamin.kwingwalidman@gmail.com">
                E-Mail <HiOutlineMail size={30}/>
              </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#686ee2]'>
              <a className='flex justify-between items-center w-full text-gray-300 ' 
              href="">
                CV <BsFillPersonLinesFill size={30}/>
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}


export default Navbar;
