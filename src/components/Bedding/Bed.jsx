import React from 'react'
import Commerce from '../E-commerce/Commerce';
import Management from '../Management/Managment'

const Bed = () => {
  return (
    <div>
        <div className='justify-center px-2 md:px-4 py-1 font-serif lg:flex sm:flex md:flex'>

        <div style={{width:350, height:300}} className='text-b font-bold bg-yellow-800 text-slate-50 text-center'>
        <div>
            <p className='py-20 px-4'>Our Dynamic team is able to deliver the
following key services in a bid to deliver
cutting edge digital design creatives.</p>
        </div>

      </div>
      <div style={{width:350, height:300}} className='text-base font-thin text-center px-2'>
<p className='py-14 space-y-3 text-left'>
    <li>Leasing of landscaping materials (e.g. lawn
mowers, blowers, sprinkle3 systems, etc.)</li>
    <li>Online plant nursery (e.g. a wide variety of
plants, shrubs, and trees available for
purchase)</li>
    <li>Online design and planning services
</li>
    <li>Delivery and installation services</li>
    
</p>
      </div>
   
    </div>
    <div>
        <Management/>
    </div>

    <div className='justify-center px-2 md:px-4 py-1 font-serif lg:flex sm:flex md:flex'>
      <div style={{width:350, height:300}} className='text-base font-thin text-center px-2'>
<p className='py-14 space-y-3 text-left'>
    <li>Leasing of landscaping materials (e.g. lawn
mowers, blowers, sprinkle3 systems, etc.)</li>
    <li>Online plant nursery (e.g. a wide variety of
plants, shrubs, and trees available for
purchase)</li>
    <li>Online design and planning services
</li>
    <li>Delivery and installation services</li>
    
</p>
      </div>
      <div style={{width:350, height:300}} className='text-b font-bold bg-green-800 text-slate-50 text-center'>
        <div>
            <p className='py-20 px-4'>Our Dynamic team is able to deliver the
following key services in a bid to deliver
cutting edge digital design creatives.</p>
        </div>

      </div>
    </div>

    <div>
        <Commerce/>
    </div>

<div className='justify-center px-2 md:px-4 py-1 font-serif lg:flex sm:flex md:flex'>
      <div style={{width:350, height:300}} className='text-base font-thin text-center px-2'>
<p className='py-14 space-y-3 text-left'>
    <li>Leasing of landscaping materials (e.g. lawn
mowers, blowers, sprinkle3 systems, etc.)</li>
    <li>Online plant nursery (e.g. a wide variety of
plants, shrubs, and trees available for
purchase)</li>
    <li>Online design and planning services
</li>
    <li>Delivery and installation services</li>
    
</p>
      </div>
      <div style={{width:350, height:300}} className='text-b font-bold bg-yellow-800 text-slate-50 text-center'>
        <div>
            <p className='py-20 px-4'>Our Dynamic team is able to deliver the
following key services in a bid to deliver
cutting edge digital design creatives.</p>
        </div>

      </div>
    </div>

    </div>
  )
}

export default Bed;
