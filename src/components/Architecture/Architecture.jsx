import React from 'react'
import Compound from '../../Assets/images/garden.png'
import './land.css'

const Architecture = () => {
  return (
    <div className='px-1 max-lg:pb-24  lg:px-16 '  >
        <div className='sm:pt-12 lg:pt-12'>

        <h1 className='text-2xl text-left font-extrabold text-green-600 p-3 lg:ml-14 lg:text-3xl'>Land Architecture and Development</h1>
        <div style={{height:470}} className='sm:flex lg:flex md:flex'>
<div className='commerce p-2 text-left'>
    <p className='text-lg py-1 font-semibold text-yellow-600'>"Breathing life into you outdoor
space through innovation"</p>
    <p className=''>Land Architecture and Development: Our team of
experts can transform any outdoor space into a
beautiful and functional environment. We specialize in
designing and constructing outdoor living areas,
patios, retaining walls, water features, and more. We
use the latest technology and techniques to create
custom designs that are tailored to our clients
'specific needs and preferences.</p>

</div>
<div>
    <img className=' sm:mt-12' src={Compound} alt="ecommerce" sizes="800" srcset="" />
</div>
        </div>
        </div>
      
    </div>
  )
}

export default Architecture;
