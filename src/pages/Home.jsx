import React from 'react'
import HeroSection from '../components/Herosection'
import NewsletterBanner from '../components/NewsletterBanner'
import FeaturesBar from '../components/FeaturesBar'
import GamerWorld from '../components/GamerWorld'
import BestSeller from '../components/BestSeller'
import CategorySection from '../components/CategorySection'
import BestDeails from '../components/BestDeails'
import Highlights from '../components/Highlights'

const Home = () => {
  return (
    <div className='flex flex-col'>
        <CategorySection/>
        <HeroSection/>
        <FeaturesBar/>
        {/* <GamerWorld/> */}
        <BestSeller/>
        {/* <NewsletterBanner/> */}
        <BestDeails/>
        <Highlights/>
        
    </div>
  )
}

export default Home