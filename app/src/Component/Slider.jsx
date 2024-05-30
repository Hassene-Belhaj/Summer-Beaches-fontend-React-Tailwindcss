import React, { useState } from 'react'
import {BsChevronCompactRight,BsChevronCompactLeft} from 'react-icons/bs'
import {RxDot} from 'react-icons/rx'

const Slider = () => {
const [currentIndex,setcurrentIndex] = useState(0)

    const sliderData = [
        {
          url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
      ]

const images = sliderData.length

const prevSlider = () => {
const isthefirst = currentIndex === 0 
const newindex = isthefirst ? images - 1 : currentIndex - 1 
setcurrentIndex(newindex)    
}

const nextSlider = () => {
const isthelast = currentIndex === images -1 
const newindex2 = isthelast ? 0 : currentIndex + 1
setcurrentIndex(newindex2)     
}

const gotoimage = (index) => {
setcurrentIndex(index)    
}


  return (
    <div id='views' className='max-w-7xl h-screen mx-auto px-4 py-20'>
        <div className='relative rounded-lg group max-w-7xl h-[90%] mx-auto bg-center bg-cover ease-in duration-300' style={{backgroundImage:`url(${sliderData[currentIndex].url})`}}>
            <div>
                <button className='absolute top-[50%] left-5 -translate-x-0 translate-y-[-50%] group-hover:bg-black/50 rounded-full text-white p-2' ><BsChevronCompactLeft size={30} onClick={nextSlider} /></button> 
                <button className='absolute top-[50%] right-5 -translate-x-0 translate-y-[-50%] group-hover:bg-black/50 rounded-full text-white p-2' ><BsChevronCompactRight size={30} onClick={prevSlider}  /></button> 
            </div>
        </div>
            <div className='flex justify-center items-center'>
                {sliderData.map((item,index)=>{
                    return (
                        <div key={index}>
                            <RxDot className='text-indigo-500' size={30} onClick={()=>gotoimage(index)}/>
                        </div>
                    )
                })}
        </div>
   
      
     </div>    
  )
}

export default Slider