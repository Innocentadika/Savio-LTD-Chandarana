import React from 'react';
import WhatsAppButton from '../../Assets/whatsapp/WhatsApp'
import { Link } from 'react-router-dom'
import {
    FaGithub,
    FaFacebookSquare,
    FaLinkedin,
    FaTwitterSquare,
    FaYoutube,
  } from 'react-icons/fa';
function Footer() {
  return (

<div style={{backgroundColor: '#384A52'}}>
    
  <div className='footer m-1 '>
         <div className=' ml-4 text-center ml-88 justify-end mr-36 mt-4 gap-20 flex sm:flex items-center 2'>
            <h6 className='font-semibold text-pink-600  lg:mt-4 md:mt-4 lg:mb-2 md:mb-2'>Subscribe to our Newsletter<span className='text-lg'>&#128075;</span></h6>
            <WhatsAppButton />
        </div>

     <div className='  grid lg:cols-2 md:col-span-1 md:cols-2 gap-8 lg:flex  space-x-20 lg:ml-24 m  pt-1'>
            <div className=' pt-1 md:ml-20 lg:ml-20  grid lg:flex-cols-2  mt-1 '>
                <div>
                    <p className='text-green-500 text-xl font-extrabold'>Trust us to serve you</p>
                    <p className='text-xs text-yellow-500 ' >
SAVIO LANDSCAPING SERVICES
</p>
                </div>
                
                <div className='flex justify-between md:w-[70%] p-4 pt-1 text-white md:gap-1 lg:gap-2'>
                    <a href="https://github.com/Innocentadika"><FaGithub size={30} /></a>
                    <a href="https://www.facebook.com/search/top?q=gearbox"><FaFacebookSquare size={30} className='text-blue-400' /></a>
                    <a href="https://twitter.com/gearboxke?lang=en"><FaTwitterSquare size={30} className='text-blue-300' /></a>
                    <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=false&heroEntityKey=urn%3Ali%3Aorganization%3A9495955&keywords=gearbox%20&origin=RICH_QUERY_SUGGESTION&position=7&searchId=8765b8e8-8bc2-4aa8-a598-ef327d65f9d2&sid=W90"><FaLinkedin className='text-blue-300' size={30} /></a>
                    <a href="https://www.youtube.com/results?search_query=gearbox+academy"><FaYoutube size={30} className='text-red-700' /></a>
                 
                </div>
            </div>
           
<div className='md:flex md:space-x-48 sm:flex sm:space-x-32'>

                <div className='lg:mt-24 md:mt-24 lg:mb-2 md:mb-2 '>
                    <h6 className='font-medium text-white '>Contact Information</h6>
                    <ul className='pt-4 text-gray-400'>
                        <li className='py-2 text-sm'>Industrial-Area</li> 
                        
                        <li className='py-2 text-sm'><a href="mailto:info@saviolandscapingservices.co.ke">info@saviolandscapingservices.co.ke</a></li>
                      <li className='py-2 text-sm'> <a href="http://www.saviolandscaping.com/">www.saviolandscaping.com</a></li>
                    </ul>
                </div>

                    <div className='lg:mt-24 md:mt-24 lg:mb-2 md:mb-2'>
                        <h6 className='font-medium text-white'>SAVIO LTD
COMPANY PROFILE</h6>
                        <ul className='pt-4  text-gray-400'>
                            <li className='py-2 text-sm'>About us</li>
                            <li className='py-2 text-sm'>Services</li>
                            
                            <li className='py-2 text-sm'>News</li>
                            <Link 
                            to='privacy'
                            span={true}
                            smooth={true} 
                            className='py-2 text-sm'>Privacy Policy</Link>
                        </ul>
                    </div>

                    </div>

                        <div className='lg:mt-24 md:mt-24 lg:mb-2 md:mb-2 '>
                            <h6 className='font-medium text-white'>Our Core Values
</h6>
                            <ul className='pt-4  text-gray-400'>
                                <li className='py-2 text-sm'>Quality.</li>
                                <li className='py-2 text-sm'>Sustainability.</li>
                                <li className='py-2 text-sm'>Customer Service.</li>
                                <li className='py-2 text-sm'>Innovation.</li>
                                <li className='py-2 text-sm'>Excellence.</li>
                        
                            </ul>
                        </div>
                        <div className='blur-lg left-10'/>
 
    </div>
    
  </div>
</div>

      
  );
}

export default Footer;