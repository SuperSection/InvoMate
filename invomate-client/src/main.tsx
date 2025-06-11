import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Toaster } from 'react-hot-toast';
import './index.css'

import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import GenerateInvoice from './pages/GenerateInvoice';
import PreviewPage from './pages/PreviewPage';
import Menubar from './components/Menubar';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Menubar />
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/generate' element={<GenerateInvoice />} />
        <Route path='/preview' element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
