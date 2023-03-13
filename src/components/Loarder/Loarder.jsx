import React, { Fragment } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Navbar from '../../Assets/navbar/Navbar'
import Accounts from '../Accounts/Accounts'
import Footer from '../Footer/Footer'
import More from '../Work/Work.component'
import Background from '../../Assets/images/background.png'
import Testimonies from '../Testimonials/Testimonies'
import Services from '../../Assets/Services/Services'
import Message from '../Message/Message'


const Loarder = () => {
  return (
    <div style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
        
    <Fragment> 
               
         <Navbar/>
         <div className='justify-center text-2xl text-center items-center'>
      <h1 className=' text-base text-yellow-500' style={{ paddingTop: '1rem', paddingBottom: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
        {' '}
        <span style={{ color: 'green', fontWeight: 'bold', fontFamily: 'sansf'}}>
          <Typewriter
            words={['Quality', 'Customer Service', 'Sustainability', 'Innovation', 'Excellence']}
            loop={100}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
        SAVIO LANDSCAPING VALUES
      </h1>
    </div>
    <div>
      <Message/>
    </div>

          <Services/>      
        <div className='justify-center py-4 px-2'>
                <p className='text-center text-2xl text-green-800 font-extrabold py-3'>What We Believe In</p>
                <span>
At Savio Landscaping Services, we believe in the transformative power of nature. We believe that by
enhancing outdoor spaces, we can improve the quality
of life for individuals, families, and communities. We are
dedicated to creating beautiful, functional, and
sustainable outdoor environments that bring people
closer to nature and enhance their wellbeing.
                </span>
        </div>
        <Testimonies/>
        <More/>
        <Accounts/>
<Footer/>
    </Fragment>
    </div>
  )
}

export default Loarder;
