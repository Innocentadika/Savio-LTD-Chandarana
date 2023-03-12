import React, { Fragment } from 'react'
import Navbar from '../../Assets/navbar/Navbar'
import Accounts from '../Accounts/Accounts'
import Footer from '../Footer/Footer'
import More from '../Work/Work.component'
import Background from '../../Assets/images/background.png'
import Testimonies from '../Testimonials/Testimonies'


const Loarder = () => {
  return (
    <div style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
    <Fragment> 
               
         <Navbar/>
                
        <div>

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
