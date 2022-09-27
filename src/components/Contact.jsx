import React from 'react'

const contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1f454d] flex justify-center items-center p-4 text-[#367e84]'>
        <form action="https://getform.io/f/cc76fd4a-fc4d-4ba0-bc60-214de2cb3cca" method='POST' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#DAA520]'>Contact</p>
                    <p className='py-4'>// Submit the form below to contact me, or contact me by my e-mail directly: Benjamin.kwingwalidman@gmail.com</p>
                </div>
                <input className='p-2  text-gray-600' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 text-gray-600' type="email" placeholder='Email' name='email' />
                <textarea className='p-2  text-gray-600' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-black mt-4 px-4 py-4 hover:bg-[#DAA520] border-2 border-black mx-auto flex items-center'>Submit</button>
        </form>

    </div>
  )
}

export default contact