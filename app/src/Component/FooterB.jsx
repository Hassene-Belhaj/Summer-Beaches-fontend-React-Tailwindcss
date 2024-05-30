import React from 'react'
import {AiOutlineSearch,AiOutlineUserAdd,AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {FaFacebook,FaInstagram,FaYoutube,FaPinterest,FaTwitter} from 'react-icons/fa'

const FooterB = () => {
  return (
    <footer className='w-full bg-gray-100'>   
    <div className='max-w-7xl bg-gray-100 mx-auto py-20'>

          <div className='text-center lg:flex lg:items-baseline justify-between mb-4'>
            <h5 className= 'text-3xl font-bold uppercase px-4 py-8 text-black'>Beaches<span className='text-indigo-500 text-5xl'>.</span></h5>

            <div className='flex justify-between mx-8 lg:w-[280px]'>
                  <FaFacebook size={20} className='text-indigo-500'/>
                  <FaInstagram size={20} className='text-indigo-500'/>
                  <FaTwitter size={20} className='text-indigo-500'/>
                  <FaYoutube size={20} className='text-indigo-500'/>
                  <FaPinterest size={20} className='text-indigo-500'/>
                </div>
          </div>  
                
              <div className='flex justify-between lg:justify-center font-semibold'>

                <ul className='text-left lg:flex'>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Partnerships</li>
                    <li className='p-4'>Careers</li>
                    <li className='p-4'>Newsroom</li>
                    <li className='p-4'>Advertising</li>
                </ul>
          
                <ul className='text-right lg:flex'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>Destinations</li>
                    <li className='p-4'>Travel</li>
                    <li className='p-4'>View</li>
                    <li className='p-4'>Book</li>
                </ul>
              </div>
          </div>
        </footer>              
  )
}

export default FooterB