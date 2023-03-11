import React from 'react';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import clientData from './clientData'

const pStyle = {
  fontWeight: 'bold',
  color: 'black'
}

const Clientshow = () => {
    return (

      <div >
        <Slide>
         {slideImages.map((clientData, index)=> (
            <div style={{backgroundColor: 'transparent'}} className='flex px-20 lg:px-32 sm:px-32  max-xl:flex-col  justify-center' key={index}>
              <div className=''>
                <img className='rounded-l-full rounded-r-full ' style={{width: 400}} src={clientData.image} alt="" />
                
              </div>
              <div className='p-5 sm:px-16 lg:p-20'>
                    <div className='py-1 flex-col'>
                    <p className='lg:text-2xl sm:text-lg' style={pStyle}>{clientData.title}</p>
                    <p className='lg:text-lg sm:text-base' >{slideImage.review}</p>
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