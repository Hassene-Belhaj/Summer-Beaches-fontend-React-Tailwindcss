import React from 'react'

const SelectCard = ({bg,text}) => {
  return (
          <div className='relative'>
                <img className='object-cover w-full h-full' src={bg}  />
                <div className='absolute top-0 left-0 w-full h-full bg-black/50'>
                </div>
                <div className='absolute left-4 bottom-4'>
                 <h3 className='text-white text-2xl font-semibold uppercase'>{text}</h3>   
                </div>
           </div>
  )
}

export default SelectCard