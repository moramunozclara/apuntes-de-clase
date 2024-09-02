import '.css//index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import router from './lib/routes/router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
