import React from 'react';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './testimonies.css'
import clientData from './clientData'


const Testimonies = () => {
    return (

      <div style={{backgroundColor: 'rgb(9, 61, 9)'}} >
        <h2>Client Testimonials</h2>
        <Slide>
         {clientData.map((clientData, index)=> (
            <div  key={index}>
              <div className='container testimonials_container pb-8 space-x-1'>
      <div className='swiper-wrappe'>

      <article className='testimonial swiper-slide'>
        <div className='avatar'>
          <img src={clientData.image}  alt='Client'/>
      
        </div>
        <div className='testimonial_info'>
          <h5 className='text-white'> {clientData.name} </h5>
          <small>Client</small>
        </div>
        <div className='testimonial_body'>
          <p>{clientData.review}</p>
        </div>
      </article>

      </div>
    </div>
              
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Testimonies;
