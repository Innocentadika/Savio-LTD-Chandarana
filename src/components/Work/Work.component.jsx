import React from 'react'
import './work.css'
import moreData from './moreData'
import Bed from '../Bedding/Bed'
import Maincover from '../../Assets/images/maincover.png'


const More = () => {
  return (
    <>
    <Bed/>
    <div style={{ backgroundImage: `url(${Maincover})`, backgroundSize: 'cover'}}  className="startup">
    <h1 className='text-green-700 text-5xl text-center font-extrabold'>Why you will love working with us</h1>
        <section className='startup2'>
      <div className='container grid5 mtop'>
        {moreData.map((items, index) => (
            <div className='grow box'key={index}>
                <h4>{items.title}</h4>
                <label>{items.review}</label>
    </div>
        ))}
    </div>
    </section>
    </div>
    </>
  )
}

export default More;
