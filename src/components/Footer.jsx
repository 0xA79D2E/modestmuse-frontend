import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="Modest Muse Logo" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Modest Muse is a stylish and contemporary athleisure brand inspired by streetwear, designed for individuals who value both modesty and fashion. It caters to those seeking comfortable yet chic clothing that aligns with a modest lifestyle.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>MODEST MUSE</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
          <li>  
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About us</Link>
                </li>
                <li>
                    <Link to="/privacy-policy">Privacy policy</Link>
                </li>
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-XXX-XXX-XXXX</li>
                <li>contact@modestmuse.ca</li>
            </ul>
        </div>

      </div>

      <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025 @ Modest Muse - All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
