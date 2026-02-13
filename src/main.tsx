import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Valuser from './route/valuser'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Valuser />
  </StrictMode>,
)
