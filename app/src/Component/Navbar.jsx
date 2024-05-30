import React, { useState } from 'react'
import { useEffect } from 'react'
import {AiOutlineSearch,AiOutlineUserAdd,AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {FaFacebook,FaInstagram,FaYoutube,FaPinterest,FaTwitter} from 'react-icons/fa'
import { Link } from 'react-scroll'



const Navbar = () => {
 const [nav,setNav] = useState(false)
 const [color,setColor] = useState(false)


 useEffect(()=>{
 window.addEventListener('scroll',()=>{
 window.scrollY >= 60 ? setColor(true) : setColor(false) 
 })


 })

 const HandleClick = () =>{
   setNav(!nav)
  }
 
  const HandleClose =()=>{
    setNav(!nav)
  }

  return (
    <header className='w-full h-full mx-auto'>
        <nav className={color ? 'w-full bg-black/80 flex justify-between items-center h-20 mx-auto py-2 px-2 z-40 fixed text-white transition-all duration-300' 
        : 
        ' w-full flex justify-between items-center h-20 mx-auto py-2 px-2 z-40 absolute text-white transition-all duration-300'} >  
            <h1 className={nav ? 'text-3xl font-bold uppercase px-4 z-30 text-black' : 'text-3xl font-bold uppercase px-4 z-30'}>
              Beaches
               <span className='text-indigo-500 text-5xl'>.</span></h1>
            <ul className='hidden md:flex justify-center items-center text-2xl hover:cursor-pointer'>
              
            <Link  to="home" spy={true} smooth={true} offset={50} duration={500}> 
            <li className='p-4'>Home</li>
            </Link>
            <Link  to="destinations" spy={true} smooth={true} offset={50} duration={500}> 
            <li className='p-4'>Destinations</li>
            </Link>
            <Link to="travel" spy={true} smooth={true} offset={50} duration={500}> 
            <li className='p-4'>Travel</li>
            </Link> 
            <Link  to="views" spy={true} smooth={true} offset={50} duration={500}> 
            <li className='p-4'>Views</li>
            </Link> 
            <Link  to="book" spy={true} smooth={true} offset={50} duration={500}> 
            <li className='p-4'>Book</li>
            </Link>

           </ul>

            <div className='hidden md:flex justify-between items-center'>
                <AiOutlineSearch  className='mx-4' size={20}/>
                <AiOutlineUserAdd className='mx-4'  size={20}/>    
            </div>
       </nav>

          <nav className='flex md:hidden'>
            {nav ? <AiOutlineClose onClick={HandleClick} size={25}className='fixed top-7 right-10 z-50 text-indigo-500'/>
            : 
            <AiOutlineMenu onClick={HandleClick} size={25} color='white' className='fixed top-7 right-10 z-[50]'/> }
          </nav>  

             <nav className={nav ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-gray-200/90 ease-out duration-500 z-10 px-4 mx-auto ' : 'md:hidden absolute top-0 -left-full w-full h-screen  bg-gray-300/90 ease-out duration-500 z-10'}>

                <ul className='text-2xl text-center px-10 pt-20 pb-4 hover:cursor-pointer'>
                    <Link onClick={HandleClose}  to="home" spy={true} smooth={true} offset={50} duration={500}> 
                    <li className='p-4 border-b-2 border-black'>Home</li>
                    </Link>
                    <Link onClick={HandleClose} to="destinations" spy={true} smooth={true} offset={50} duration={500}> 
                    <li className='p-4 border-b-2 border-black'>Destinations</li>
                    </Link>
                    <Link  onClick={HandleClose} to="travel" spy={true} smooth={true} offset={50} duration={500}> 
                    <li className='p-4 border-b-2 border-black'>Travel</li>
                    </Link> 
                    <Link  onClick={HandleClose} to="views" spy={true} smooth={true} offset={50} duration={500}> 
                    <li className='p-4 border-b-2 border-black'>Views</li>
                    </Link> 
                    <Link  onClick={HandleClose} to="book" spy={true} smooth={true} offset={50} duration={500}> 
                    <li className='p-4 border-b-2 border-black'>Book</li>
                    </Link> 
               </ul>        
              <div className='flex flex-col my-16 mx-10 font-semibold'> 
              <button className='w-full py-4 border-2 border-black rounded-xl hover:bg-black  hover:text-white ease-in-out duration-150'>Search</button>
              <button className='w-full my-4 py-4 border-2 border-black rounded-xl hover:bg-black  hover:text-white ease-in-out duration-150'>Account</button>
            <div className='flex justify-between px-10 py-20 hover:cursor-pointer'>
              <FaFacebook size={20} color='black'/>
              <FaInstagram size={20} color='black'/>
              <FaTwitter size={20} color='black'/>
              <FaYoutube size={20} color='black'/>
              <FaPinterest size={20} color='black'/>
            </div>
            </div>   
        </nav> 
   </header>
  )
}

export default Navbar