import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CartContextProvider from './context/CartContext.jsx'
import LanguageContextProvider from './context/LanguageContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </LanguageContextProvider>
  </StrictMode>,
)
