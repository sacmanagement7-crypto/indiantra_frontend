import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ShopProvider } from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ShopProvider>
  </StrictMode>,
)
