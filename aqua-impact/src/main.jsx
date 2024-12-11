import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { A11yAnnouncer } from '@react-three/a11y';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
    <A11yAnnouncer/>
  </StrictMode>,
)
