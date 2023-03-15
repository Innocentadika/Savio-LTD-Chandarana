import React from 'react';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './testimonies.css'
import clientData from './clientData'

const pStyle = {
  fontWeight: 'bold',
  color: 'black'
}

const Clientshow = () => {
    return (

      <div >
        <Slide>
        <h2>Client Testimonials</h2>
         {slideImages.map((clientData, index)=> (
            <div style={{backgroundColor: 'transparent'}} className='flex px-20 lg:px-32 sm:px-32  max-xl:flex-col  justify-center' key={index}>
              <div className='container testimonials_container mySwiper pb-8 space-x-1'>
      <div className='swiper-wrappe'>

      <article className='testimonial swiper-slide'>
        <div className='avatar'>
          <img src={Avator}  alt='Client'/>
      
        </div>
        <div className='testimonial_info'>
          <h5>John Luck</h5>
          <small>Client</small>
        </div>
        <div className='testimonial_body'>
          <p>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum expedita animi voluptatem natus! Accusantium atque unde nemo architecto. Itaque sapiente ipsam consequatur perferendis quas magnam, excepturi nihil natus velit odit.     
          </p>
        </div>
      </article>

      </div>
    </div>
              
            </div>
          ))} 
        </Slide>
        <p className='text-green-500 text-center font-serif lg:text-lg sm:text-base'>Welcome  to Nachimo .E. Works<span>&#128075;</span></p>
        <p className='text-center font-serif lg:text-lg sm:text-base'>Located: <span className='text-blue-300 italic'>Industrial Area <span className='text-green-400 text-2xl'>&#128739;</span> Butere Road.</span></p>
      </div>
    )
}
export default Clientshow;

import React from 'react'



const Testimonies = () => {
  return (
<div className='bg-green-800'>



</div>
  )
}

export default Testimonies;
