import React from 'react'
import Compound from '../../Assets/images/garden.png'
import Gardened from '../../Assets/images/gardened.png'
import Computer from '../../Assets/images/e-commerse.png'


import './services.css'

const Services = () => {
  return (
    <div className='courses py-4 px-1'>
        <h2 className='pb-4'>Our Popular Services</h2>
        <div className='lg:flex lg:space-x-3 space-y-2'>

        <div className='sm:flex md:flex space-y-2 lg:space-x-3'>
  <div className="container courses_container">
  <article className="course">
      <div className="course_image">
        <img src={Compound} alt=''/>
      </div>
      <div className="course_info">
        <h4>Land Architecture and Development</h4>

      <p>
      Our team of experienced landscape architects
will work with clients to create a custom design that is tailored to their specific needs and preferences. We offer a range of services, including site analysis, concept development, master planning, construction documentation, and project management.
      </p>
      <a href="/" className="btn btn-primary">GET STARTED</a>
      </div>
      
    </article>
    </div>


    <div className="container courses_container">
  <article className="course">
      <div className="course_image">
        <img src={Gardened} alt=''/>
      </div>
      <div className="course_info">
        <h4>Landscaping Management</h4>

      <p>
      Our landscape maintenance services include mowing,
edging, pruning, weed control, fertilization, and irrigation management. We also provide seasonal services such as leaf removal and holiday lighting.
      </p>
      <a href="/" className="btn btn-primary">GET STARTED</a>
      </div>
      
    </article>
    </div>

    </div>

    <div className="container courses_container">
  <article className="course">
      <div className="course_image">
        <img src={Computer} alt=''/>
      </div>
      <div className="course_info">
        <h4>E-commerce platform</h4>

      <p>
      Our online store offers a wide range of landscaping materials and plants for sale or lease, including mulch, soil, stone, pavers, and decorative plants. Customers can easily browse our inventory, place orders, and arrange for a delivery or pick-up. Our customers will also be able to lease out major landscaping materials to save on both storage and purchasing costs.
      </p>
      <a href="/" className="btn btn-primary">GET STARTED</a>
      </div>
      
    </article>
    </div>

    </div>

    </div>
  )
}

export default Services;
