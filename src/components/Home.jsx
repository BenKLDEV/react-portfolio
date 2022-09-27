import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi' 
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className= 'w-full h-screen bg-[#1f454d]'>Home


    {/*bg-[#393e6f] */}

    {/* Container */}
    <div className='max-w-[1000px] mx-auto sm:px-8 flex flex-col justify-center h-full xs:pl-4 homeContainer'>
      <p className='text-[#DAA520]' >Hi my name is</p>
      <h1 className='text-4xl font-bold text-[#73604f] pb-2'>Benjamin Kwingwa Lidman</h1>
      <h2 className='text-4xl font-bold text-[#3c8d93]'>I'm a Frontend Developer.</h2>
      <p className='text-[#367e84] py-4 max-w-[700px]'>My focus areas in Programming lie on the Frontend within UI/UX while using the React Javascript Library. But I'm also interested in backend programming and have some experience with Node.js and a little PHP experience.</p>
      <div>
        <button className='border-2 border-black px-6 group py-3 my-2 flex items-center hover:bg-[#DAA520]'> 
        <Link to="work" smooth={true} duration={500}>
          View Projects 
        </Link>
        <span className='group-hover:rotate-90 duration-500'>
        <HiArrowNarrowRight className='ml-2'/>
        </span>
        </button>
      </div>

    </div>

    </div>
    
  )
}

export default Home