import React from 'react'

import DemocratQuiz from '../assets/democrat-quiz.JPG'
import WeatherApplication from '../assets/react-weather-application.JPG'
import ReactCalculator from '../assets/react-calculator.JPG'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#245458] text-[#367e84]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
              <p className='text-4xl text-bold inline border-b-4 border-[#DAA520]'>Work</p>
              <p className='py-6'>Here are some work projects I've done in the past. Feel free to check them out. <br /> Hover over the project picture to check out 
              the live demo of the program or the code. <br /> These are all made with React.</p>
        </div>


          {/* Container */}
        <div 
         className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
             
             {/* Grid Item */}
             <div style={{backgroundImage: `url(${DemocratQuiz})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  {/* Hover Effects */}
                  <div className='opacity-0 group-hover:opacity-100 pt-10'>
                        <span className='text-2xl font-bold tracking-wider'>
                        Democrat Quiz 
                        </span>
                          <div className=''>
                            <a href="https://benkldev.github.io/democrat-quiz-react/">
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="https://github.com/BenKLDEV/democrat-quiz-react">
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                  </div>
             </div> 

              {/* Grid Item 2 */}
             <div style={{backgroundImage: `url(${WeatherApplication})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  {/* Hover Effects */}
                  <div className='opacity-0 group-hover:opacity-100 pt-10'>
                        <span className='text-2xl font-bold tracking-wider'>
                        Weather Application
                        </span>
                          <div className=''>
                            <a href="https://benkldev.github.io/react-weather-app/">
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="https://github.com/BenKLDEV/react-weather-app">
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                  </div>
             </div> 


             {/* Grid Item 3 */}
             <div style={{backgroundImage: `url(${ReactCalculator})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  {/* Hover Effects */}
                  <div className='opacity-0 group-hover:opacity-100 pt-10'>
                        <span className='text-2xl font-bold tracking-wider'>
                        React Calculator
                        </span>
                          <div className=''>
                            <a href="https://benkldev.github.io/react-calculator/">
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="https://github.com/BenKLDEV/react-calculator">
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                  </div>
             </div> 



             

        </div>

      </div>
    </div>
  )
}

export default Work