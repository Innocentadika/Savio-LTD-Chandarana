import React from 'react'
import Parameter from '../../Assets/images/paremeter.png'
import { FcBinoculars } from 'react-icons/fc'
import { TbTargetArrow, TbHandLittleFinger } from 'react-icons/tb'

const Motto = () => {
  return (
    <div className='sm:flex md:flex lg:flex py-4 md:px-1 lg:pl-24'>
      <div style={{width: 360}} className='space-y-3 p-4 text-white bg-yellow-700'>
        <div className='text-9xl pl-24 lg:px-28 sm:px-12' ><FcBinoculars /></div>

        <h1 className='font-extrabold text-center text-2xl'>Our Vision</h1>

        <p className='text-zinc-400'>
To be the leading provider of comprehensive and innovative landscaping solutions in the region, recognized for our outstanding customer service,
integrity, and commitment to sustainability.
        </p>

      </div>

      <div style={{width: 360}} className='space-y-3 p-4 bg-white'>
        <div className='text-9xl pl-24 lg:px-28 sm:px-12'><TbTargetArrow/></div>

        <h1 className='font-extrabold text-center text-2xl'>Our Mission</h1>

        <p className='text-zinc-400'>
Savio Landscaping Solutions is committed to providing professional, high-quality, and sustainable landscaping services that enhance the beauty and value of our clients' properties while promoting environmental stewardship.
        </p>

      </div>

      <div style={{width: 360, backgroundImage: `url(${Parameter})`, backgroundSize: 'cover'}} className='space-y-3 p-4 text-white'>
        <div className='text-9xl pl-24 lg:px-28 sm:px-12 text-black'><TbHandLittleFinger/></div>

        <h1 className='font-extrabold text-center text-2xl'>Our Promise</h1>

        <p className='text-zinc-100'>
Our promise to you is to exceed client expectations through initiating fresh, tailored, innovative solutions for developing and established enterprises in Kenya and Africa at Large.
        </p>

      </div>

    </div>
  )
}

export default Motto;
