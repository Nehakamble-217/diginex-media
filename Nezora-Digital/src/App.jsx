import { useState } from 'react'

import './App.css'
import LandingPage from './Component/Landing-pages/LandingPage'
import Services from "./Component/Services/Services"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contactus from './Component/Contact/Contactus'

function App() {

  return (
  
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path='/contactus' element={<Contactus/>}></Route>
      </Routes>

      </BrowserRouter>

      
       
     
     
 
  )
}

export default App
