import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Payment from './Payment.jsx'
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BE_API_URL

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
