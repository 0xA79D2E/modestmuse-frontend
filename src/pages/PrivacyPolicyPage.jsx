import React from 'react'
import PrivacyPolicyComponent from '../components/PrivacyPolicy'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const PrivacyPolicyPage = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'PRIVACY'} text2={'POLICY'} />
      </div>


      <div className='my-10'>
        <PrivacyPolicyComponent /> 
      </div>

      <NewsletterBox />
    </div>
  )
}

export default PrivacyPolicyPage
