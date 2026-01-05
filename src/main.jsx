import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

document.body.style.backgroundSize = 'cover'
document.body.style.backgroundPosition = 'center'
document.body.style.backgroundAttachment = 'fixed'
document.body.style.backgroundRepeat = 'no-repeat'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)