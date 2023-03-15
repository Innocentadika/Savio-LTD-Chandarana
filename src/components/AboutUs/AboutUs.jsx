import React, { Fragment } from 'react'
import Navbar from '../../Assets/navbar/Navbar';
import Values from '../Values/Values';
import Footer from '../Footer/Footer'
import Flowerback from '../../Assets/images/flower-back.png'


const AboutUs = () => {
  return (
    <Fragment >
<div style={{ backgroundImage: `url(${Flowerback})`, backgroundSize: 'cover'}} className=''>


            <Navbar/>
            
    <div>
      <div className=' p-5 lg:p-16 sm:p-10 text-slate-200'>
        <h1 className='font-extrabold text-2xl text-green-500 py-3'>Everything Landscaping</h1>
        
        <div className=' lg:px-28 sm:px-8'>
        <p>Savio Landscaping believes that by enhancing outdoor spaces, we can improve the quality of life for individuals, families, and communities</p>
        <p>
        Savio Landscaping Services is a full-service landscaping company that specializes in land architecture and development, landscaping management, and e-commerce. We are passionate about designing and creating outdoor spaces that are both beautiful and functional. Our team of skilled professionals has years of experience in the industry and is committed to delivering the highest quality workmanship and customer service.
        </p>
        </div>

      </div>
    </div>

            <Values/>
            <Footer/>

            </div>
    </Fragment>
  )
}

export default AboutUs;
