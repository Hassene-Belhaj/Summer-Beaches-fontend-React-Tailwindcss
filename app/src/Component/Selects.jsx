import React from 'react'
import image0 from '../assets/maldives.jpg'
import image1 from '../assets/maldives2.jpg'
import image2 from '../assets/maldives3.jpg'
import image3 from '../assets/borabora.jpg'
import image4 from '../assets/borabora2.jpg'
import image5 from '../assets/keywest.jpg'
import SelectCard from './SelectCard'

const Selects = () => {
  return (
    <div id='travel' className='max-w-7xl h-full mx-auto py-20'>
        <div className='max-w-7xl h-full mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 '>
            <SelectCard bg={image0} text={'maldives'} />
            <SelectCard bg={image1} text={'jamaica'} />
            <SelectCard bg={image2} text={'antigua'} />
            <SelectCard bg={image3} text={'bora bora'} />
            <SelectCard bg={image4} text={'cozumel'} />
            <SelectCard bg={image5} text={'key west'} />

           {/* <div className='relative'>
                <img className='object-cover w-full h-full' src={image0}  />
                <div className='absolute top-0 left-0 w-full h-full bg-black/50'>
                </div>
                <div className='absolute left-4 bottom-4'>
                 <h3 className='text-white text-2xl font-semibold uppercase'>maldives</h3>   
                </div>
           </div> */}

          
         
          
        

        </div>                                              

    </div>
  )
}

export default Selects