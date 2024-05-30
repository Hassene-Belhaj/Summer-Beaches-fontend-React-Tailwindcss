import React from 'react'
import video from  '../assets/video.mp4'
import {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <section id='home' className='w-full h-screen relative z-0 mx-auto'>
     <video src={video} autoPlay loop muted className='w-full h-full object-cover'/>
     <div className='absolute top-0 left-0 w-full h-full bg-black/40'>     
        <div className='w-full h-full flex flex-col justify-center items-center font-semibold text-white'>
            <h1 className='text-5xl md:text-6xl capitalize mt-2 sm:mt-10 text-center'>first class travel</h1>
            <p className='text-3xl capitalize pt-4 text-center'>Top 1% locations Worldwide</p>
                 <div className='sm:w-2/3 md:w-full max-w-3xl flex justify-between items-center px-4 py-8 relative'>
                    <input type="text" className='w-full p-4 rounded-lg text-black focus:outline-none'/>
                    <button className='absolute right-4 p-2 mx-1 rounded-lg bg-indigo-500'><AiOutlineSearch size={30}/></button>  
                </div>
         </div>
           
     </div>

    </section>
  )
}

export default Hero