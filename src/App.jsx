import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/Header'
import HeroSection from './components/Herosection'
import Footer from './components/Footer'
import Home from './pages/Home'
import TrackOrder from './pages/TrackOrder'
import Support from './pages/Support'
import NotFound from './components/NotFound'
import AuthPage from './pages/AuthPage'
import ShopPage from './pages/ShopPage'
import AboutPage from './pages/AboutPage'
import SellerLogin from './pages/SellerLogin'

const App = () => {
  return (
    <div>
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/track-order' element={<TrackOrder/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/auth' element={<AuthPage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/seller-login' element={<SellerLogin/>}/>
       </Routes>
       <Footer/>

    </div>
  )
}

export default App