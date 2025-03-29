import React from 'react'
// import Hero from '../components/Hero'
import HeroSoon from '../components/HeroSoon'
// import LatestCollection from '../components/LatestCollection'
// import BestSeller from '../components/BestSeller'
import ComingSoon from '../components/ComingSoon'
import ReturnPolicy from '../components/ReturnPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <HeroSoon />
      <ComingSoon />
      <NewsletterBox />
      <ReturnPolicy />
    </div>


    // <div>
    //   <Hero />
    //   <LatestCollection />
    //   <BestSeller />
    //   <ReturnPolicy />
    //   <NewsletterBox />
    // </div>


  )
}

export default Home
