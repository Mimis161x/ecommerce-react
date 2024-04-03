import { useState } from 'react'
import './App.css'
import {LandingPage} from './views/LandingPage/LandingPageView'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Footer } from './components/Footer' 
import { ProductView } from './views/ProductPage/ProductView'

function App() {
  

  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<LandingPage/>}/>
        <Route path='/products' element={<ProductView/>}/> 
        <Route path='/signIn' element={<div>signIn</div>}/>  
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    
  )
}
export default App

