import React from 'react'
import image0 from '../assets/maldives.jpg'
import image1 from '../assets/maldives2.jpg'
import image2 from '../assets/maldives3.jpg'
import image4 from '../assets/borabora.jpg'
import image5 from '../assets/borabora2.jpg'
import image6 from '../assets/keywest.jpg'

const Destinations = () => {
  return (
    <div id='destinations' className='w-full max-w-7xl h-full mx-auto py-20'>
         <h2 className='capitalize text-4xl text-center py-2 font-bold'>all-inclusive resorts</h2>
         <p className='capitalize text-center text-xl py-8'>on the caribbean's best beaches</p>
    <div className='grid md:grid-cols-4 gird-rows-2 gap-4 mt-4 mx-4 sm:grid-cols-2'>
         <img  className='row-span-2 col-span-2 h-full w-full object-cover' src={image4} alt="" />
         <img className='w-full h-full object-cover' src={image1} alt="" />
         <img className='w-full h-full object-cover' src={image2} alt="" />
         <img className='w-full h-full object-cover' src={image0} alt="" />
         <img className='w-full h-full object-cover' src={image5} alt="" />
    </div>

    </div>
  )
}

export default Destinations