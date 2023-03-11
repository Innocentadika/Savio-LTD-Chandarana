import React from 'react'
import Gardened from '../../Assets/images/gardened.png'
import './management.css'

const Managment = () => {
  return (
    <div className='px-2 lg:px-16 '  >
        <div className='sm:pt-12 lg:pt-12'>

        <h1 className='text-2xl text-left font-extrabold text-green-600 p-3 lg:ml-14 lg:text-4xl'>Landscaping Management</h1>
        <div style={{height:450}} className='sm:flex lg:flex md:flex'>
<div className='commerce p-4 text-left'>
    <p>We offer comprehensive landscaping management services that include lawn care, plant care, irrigation, and more.</p>
<p>Our
team of professionals is trained to identify and address any issues before they become problems, ensuring that our clients' outdoor spaces are always looking their best.
</p>
</div>
<div>
    <img src={Gardened} alt="ecommerce" sizes="800" srcset="" />
</div>
        </div>
        </div>
      
    </div>
  )
}

export default Managment;
