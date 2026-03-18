import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navcontext from './context/Navcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navcontext>
      <App />
    </Navcontext>
  </StrictMode>,
)
