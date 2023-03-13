import React, { Fragment } from 'react'
import Background from '../../Assets/images/background.png'
import Motto from '../Motto/Motto';


const Values = () => {

  return (
    <Fragment>

    <div style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}} className=' pb-24 '>
    <div className='p-5'>
        <div className='pb-8'>
        <div className='bg-yellow-700 float-left w-28 h-8 mb-'></div>
        </div>

        <h1 className='text-green-700 font-semibold text-lg text-center py-3'>Our Core Values</h1>

        <div className='lg:flex lg:px-36 sm:flex md:flex py-2 space-y-4'>

            

            <div style={{width: 340}} className='flex-col space-y-28 lg:pt-6'>
            
            <div className=' space-y-1'>
            <h1 className='text-green-500 text-center'>Quality</h1>
            <p>
We are committed to providing high-quality landscaping services that exceed our clients' expectations.
            </p>
            </div>

            <div className=' space-y-1'>
            <h1 className='text-green-500 text-center'>Customer Service</h1>
            <p>
We prioritize excellent customer service
and strive to build long-term relationships with our clients based on trust, honesty, and integrity.
            </p>
            </div>


            </div>



            <div className=' px-10'>

            <div style={{width: 250, height: 250}} className='text-white text-center rounded-l-full rounded-r-full bg-yellow-800 pt-12'>
                <h1 className='p-1 text-2xl font-bold'>Excellence</h1>
                <p>
Our commitment to professional excellence ensures that our clients receive the highest quality service 
                </p>
            </div>

            </div>



            <div style={{width: 340}} className='flex-col space-y-20'>
            
            <div className=' space-y-1'>
            <h1 className='text-green-500 text-center'>Sustainability</h1>
            <p>
We are dedicated to promoting environmental sustainability by using eco-friendly products, reducing waste, and implementing sustainable practices.
            </p>
            </div>

            <div className=' space-y-1'>
            <h1 className='text-green-500 text-center'>Innovation</h1>
            <p>
We continuously explore new technologies and techniques to improve our services and stay ahead of the curve.
            </p>
            </div>


            

            </div>
        </div>

        
      
    </div>
    <div className='bg-yellow-700 float-right w-24 h-24 mt-3 rounded-l-full rounded-t-full'></div>
    </div>

    <Motto/>

    </Fragment>

  )
}

export default Values;
