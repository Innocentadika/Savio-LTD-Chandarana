import React from 'react'
import BgImage from '../../Assets/images/ecommerce.png'
import Computer from '../../Assets/images/e-commerse.png'
import './commerce.css'

const Commerce = () => {
  return (
    <div style={{backgroundImage: `url(${BgImage})`, backgroundSize: 'cover'}} className='px-1 lg:px-16 '  >
        <div className='sm:pt-12 lg:pt-12'>

        <h1 className='text-4xl text-left font-extrabold text-green-600 p-3 lg:ml-14 lg:text-5xl'>E-Commerce</h1>
        <div style={{height:450}} className='sm:flex lg:flex md:flex'>
<div className='commerce p-4 text-left'>
    <p>We offer an e-commerce platform that allows
customers to lease landscaping materials and buy
plants. Our platform is user-friendly and offers a
wide range of products at competitive prices.</p>
<p>Customers can order online and have their products
delivered right to their doorstep.
</p>
</div>
<div>
    <img src={Computer} alt="ecommerce" sizes="800" srcset="" />
</div>
        </div>
        </div>
      
    </div>
  )
}

export default Commerce;
