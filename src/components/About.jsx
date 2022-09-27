import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#245458] text-[#367e84]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#DAA520]'>About
                </p>
                </div>
              
            <div>

            </div>

            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            
            <div className='sm:text-right text-4xl font-bold'>
            <p className='pb-4'>Warmly welcome to my portfolio site. </p>
            <p>Please feel free to take a look around.</p>   
            </div>

            <div>
                <p className='text-2xl'>I am passionate about building Web Applications to enchance peoples lives and make things easier for people.</p>
            </div>

        </div>

        </div>



    </div>
  )
}

export default About