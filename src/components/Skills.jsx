import React from 'react'

import Javascript from '../assets/javascript.png';
import TailwindCSS from '../assets/tailwind-css.png';
import ReactLogo from '../assets/React-logo.png';
import NodeJS from '../assets/node-js.png';
import MongoDB from '../assets/mongo-db.png';
import git from '../assets/git-logo.png';



const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#1f454d] text-[#367e84]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl py-0 font-bold inline border-b-4  border-[#DAA520]'>Skills</p>
                <p className='py-4'>These are the main technologies I prefer to work with, use frequently or have experience using.</p>
            </div>
                        {/* Tailwind */}
            <div className='w-full grid grid-cols-2 sm:grid-col-3 gap-8 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={TailwindCSS} alt="Tailwind CSS" />
                    <p className='my-4'>Tailwind CSS</p>
                </div>

                        {/* Javascript */}
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt="Javascript" />
                    <p className='my-4'>Javascript</p>
                </div>

                        {/* React */}

                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactLogo} alt="React" />
                    <p className='my-4'>React</p>
                </div>


                        {/* Node.JS */}

                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={NodeJS} alt="Node.JS" />
                    <p className='my-4'>Node.js</p>
                </div>


                        {/* MongoDB */}

                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MongoDB} alt="MongoDB" />
                    <p className='my-4'>MongoDB</p>
                </div>


                        {/* GIT */}

                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={git} alt="git" />
                    <p className='my-4'>git</p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Skills