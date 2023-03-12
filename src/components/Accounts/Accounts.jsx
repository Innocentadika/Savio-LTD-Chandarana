import React from 'react'
import { Link } from 'react-router-dom'

const Accounts = () => {
  return (
    <div className='p-3'>
    <div className='justify-between md:flex sm:flex lg:flex space-x-2 space-y-3'>
      <div style={{height: 150}} className=' sm:px-2  p-4  sm:text-base md:text-base lg:px-44 lg:text-xl space-y-1 bg-lime-500'>
        <h1 className='text-white font-light'>SUBSCRIBE FOR OUR <span className='font-bold'>NEWSLETTER</span></h1>
      <form action="/subscription" method="get">

      <div className='text-center text-white '>
            <p className='font-bold text-red-600 sm:py-2'>Subcribe</p>
            <div className='flex justify-center space-x-2'>
            <input className='rounded bg-green-200 text-black px-1 w-56 lg:w-64 ' type="email" name="" id="" placeholder='Enter your email here.' />
            <button className='bg-green-900  rounded' type="submit">Subscribe!</button>
            </div>

        </div>

      </form>
      </div>
      <div style={{height: 200}} className='border px-2 bg-green-600 lg:pr-8'>
      <div className='text-center p-4 sm:px-6 lg:px-56 lg:text-xl'>
        <button className='border rounded'><Link to='/sign-up'>Sign Up</Link></button>
        
        </div>
        <p className='text-left p-2 text-lg font-semibold '>Let us help you overcome your landscaping challenges, we'll breathe life to your property.</p>
      </div>
        
      
    </div>
    </div>
  )
}

export default Accounts;
