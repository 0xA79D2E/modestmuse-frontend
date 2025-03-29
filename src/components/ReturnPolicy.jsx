import React from 'react'
import { assets } from '../assets/assets'

const ReturnPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

      <div>
        <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
        <p className='font-semibold'>Effortless Exchange Policy</p>
        <p className='text-gray-400'>We make exchanges easy and stress-free for unworn items within 30 days of purchase.</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
        <p className='font-semibold'>Hassle-Free Returns</p>
        <p className='text-gray-400'>We offer a straightforward 14-day return policy for unworn items, ensuring a smooth return process.</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.support_img} alt="" />
        <p className='font-semibold'>Dedicated Customer Support</p>
        <p className='text-gray-400'>Our customer support team is available 24/7 to assist you with any questions or concerns.</p>
      </div>

    </div>
  )
}

export default ReturnPolicy
