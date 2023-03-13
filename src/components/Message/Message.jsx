import React from 'react'
import Backpicture from '../../Assets/images/backpicture.png'

const Message = () => {
  return (
    <div style={{ backgroundImage: `url(${Backpicture})`, backgroundSize: 'cover'}} className='p-8 text-left lg:text-xl sm:text-lg text-gray-300'>
      <div className='px-4 py-2 text-lg text-green-500 font-bold sm:text-xl lg:text-3xl'>
<p>Let us help you overcome your landscaping challenges,
we'll breathe life to your property</p>
      </div>
      <div>
        <p>Savio Landscaping Services is a comprehensive landscaping company that offers a range of services, including land architecture and development, landscaping management, and an e-commerce platform for leasing out landscaping equipment and purchasing gardening materials. Our commitment to quality, sustainability, customer service, innovation, and community sets us apart from our competitors. With a team of experienced professionals, we are dedicated to providing exceptional service to our clients and contributing to the economic development of our community.</p>
      </div>
    </div>
  )
}

export default Message;
