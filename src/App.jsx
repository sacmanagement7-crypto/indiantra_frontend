import React from 'react'
import { Route, Routes, useLocation } from 'react-router'
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
import Test from './pages/Test'
import ProductDetails from './pages/ProductDetails'
import CartPage from './pages/CartPage'
import WishlistPage from './pages/WishlistPage'
import CheckoutPage from './pages/CheckoutPage'
import AccountPage from './pages/UserPannel/AccountPage'
import Orders from './pages/UserPannel/Orders'
import Setting from './pages/UserPannel/Setting'
import Address from './pages/UserPannel/Address'
import ProtectedRoute from './components/protectedRoute'
import FAQPage from './pages/FAQPage'
import Journey from './pages/Journey'
import Thankyoupage from "./pages/ThankyouPage"
import ContactUs from './pages/ContactUs'
import TermsPage from './pages/TermsPage'
import BlogPage from './pages/BlogPage'
import VendorStatus from './pages/VendorStatus'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = ["/auth", "/seller-login"].includes(location.pathname);
  return (
    <div>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/track-order' element={<TrackOrder />} />
        <Route path='/support' element={<Support />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/seller-login' element={<SellerLogin />} />
        <Route path='/test' element={<Test />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        {/* <Route path='*' element={<NotFound/>}/> */}
        <Route path='/cart' element={<CartPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
        <Route path='/checkout' element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />

        <Route path='/faqs' element={<FAQPage />} />
        <Route path='/account' element={<ProtectedRoute><AccountPage /></ProtectedRoute>} />
        <Route path='/account/orders' element={<ProtectedRoute><Orders /></ProtectedRoute>} />
        <Route path='/account/settings' element={<ProtectedRoute><Setting /></ProtectedRoute>} />
        <Route path='/account/address' element={<ProtectedRoute><Address /></ProtectedRoute>} />
        <Route path='/account/support' element={<ProtectedRoute><Orders /></ProtectedRoute>} />
        <Route path='/journey' element={<Journey />} />
        <Route path='/Thankyou' element={<Thankyoupage />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/terms' element={<TermsPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/vendor/status/:id' element={<VendorStatus />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App