import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Modest Muse was born from a vision to redefine athleisure by blending contemporary streetwear with modest fashion. Our journey began with a simple yet powerful idea: to create stylish, functional clothing that empowers individuals to embrace both comfort and confidence without compromising on their values.</p>
              <p>At Modest Muse, we believe that fashion should be both expressive and inclusive. Our carefully curated collections prioritize quality, versatility, and a modern aesthetic, allowing wearers to move effortlessly between active and casual settings while maintaining a sense of elegance.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission at Modest Muse is to inspire confidence through fashion that aligns with a modest lifestyle. We are committed to crafting thoughtfully designed pieces that celebrate individuality while ensuring comfort, durability, and timeless appeal. With an emphasis on understated sophistication, we strive to make modest fashion effortlessly chic and accessible to all.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Craftsmanship:</b>
            <p className=' text-gray-600'>Every Modest Muse piece is thoughtfully designed and crafted with premium materials to ensure durability, comfort, and style. We prioritize quality in every stitch, offering clothing that stands the test of time.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Effortless Elegance:</b>
            <p className=' text-gray-600'>Our collections seamlessly blend fashion and functionality, allowing you to express yourself with confidence. Whether you're on the go or unwinding, our pieces provide the perfect balance of comfort and sophistication.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Inclusive & Thoughtful Design:</b>
            <p className=' text-gray-600'>We understand the importance of modest fashion that doesn’t compromise on style. Our designs cater to diverse preferences, ensuring that everyone can find pieces that align with their personal expression.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
