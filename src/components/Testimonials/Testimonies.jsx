import React from 'react'
import Avator from '../../Assets/images/avator.png'

import './testimonies.css'

const Testimonies = () => {
  return (
<div className='bg-green-800'>
<h2>Client Testimonials</h2>
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
  )
}

export default Testimonies;
