import React from 'react'
import {RiCustomerService2Line} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Search = () => {
  return (
    <div id='book' className='max-w-7xl w-full h-full mx-auto py-20'>
      <div className='max-w-7xl h-full mx-auto grid md:grid-cols-5'>
        <div className='flex flex-col justify-center px-4 py-8 col-span-3'>
        <h2 className='sm:text-2xl md:text-3xl uppercase font-bold text-left'>luxury included vacations for two people</h2>
        <p className='py-12'>  Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.</p>

        <div className='flex flex-row sm:grid-cols-1 md:grid-cols-2 py-8 '>
        
        <div className='flex justify-start items-center w-full '>
          <button className='bg-indigo-500 py-4 px-4 rounded-lg'><RiCustomerService2Line color='white' size={40}/></button>
          <div className='mx-4 flex flex-col justify-center items-center sm:text-sm md:text-md uppercase'>
          <h3 className='text-xl uppercase font-semibold'>leading service</h3>
          <p>all-inclusive company for</p>
          <p>20 years in-a-row</p>
          </div>
         </div>

         <div className='flex justify-start items-center w-full'>
          <button className='bg-indigo-500 py-4 px-4 rounded-lg'><MdOutlineTravelExplore color='white' size={40}/></button>
          <div className='mx-4 flex flex-col justify-center items-center sm:text-sm md:text-md uppercase'>
          <h3 className='text-xl uppercase font-semibold'>leading service</h3>
          <p>all-inclusive company for</p>
          <p>20 years in-a-row</p>
          </div>
         </div>

        
        </div> 

        </div>




        <div className='px-4 py-8 md:col-span-2 sm:col-span-3'>
          <div className='flex flex-col justify-center items-center w-full mx-auto border border-gray-300 uppercase px-6'>
            <h4 className='my-4'>get an additional 10% off</h4>
            <p className='my-2'>12 hours left</p>
              <div className='my-2'>
                  <button className='flex w-full bg-gray-800 py-2 px-12 mb-4 text-white uppercase'>book now and safe</button>      
              </div>
          </div>
          <div className='flex flex-col justify-start items-start py-4 capitalize font-semibold '>
            <label className='mt-4' >Destination</label>
            <input className='border border-black w-full font-semibold px-1' type="text" placeholder=''  initialvalue=''/>
            <label className='mt-4'>check in</label>
            <input className='border border-black w-full font-semibold px-1' type="date" />
            <label className='mt-4' >check-out</label>
            <input className='border border-black w-full font-semibold px-1' type="date" />
              <div className='flex w-full py-6'>
                <button className=' bg-indigo-500 w-full py-4 text-white font-semibold rounded-xl'>Rates & availabilities</button>
              </div>
          </div>
        </div>

      </div>
        
    </div>
  )
}

export default Search