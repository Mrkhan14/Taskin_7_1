import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CartContextProvider from './context/CartContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </StrictMode>,
)
