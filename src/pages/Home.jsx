import React from 'react'
import { useContext } from 'react'
import HeroSection from '../components/HeroSection'
import NewsletterBanner from '../components/NewsletterBanner'
import FeaturesBar from '../components/FeaturesBar'
import GamerWorld from '../components/GamerWorld'
import BestSeller from '../components/BestSeller'
import CategorySection from '../components/CategorySection'
import BestDeails from '../components/BestDeails'
import Highlights from '../components/Highlights'
import { ShopContext } from '../context/ShopContext'
import HeroBanner from '../components/HeroBanner'


const Home = () => {
  const {products} = useContext(ShopContext);
  return (
    <div className='flex flex-col'>
        <CategorySection/>
        {/* <HeroBanner/> */}
        <HeroSection/>
        <FeaturesBar/>
        <GamerWorld/>
        <BestSeller/>
        {/* <NewsletterBanner/> */}
        <BestDeails/>
        <Highlights/>
        
    </div>
  )
}

export default Home