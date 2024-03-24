import { useState } from 'react'
import './App.css'
import {LandingPage} from './views/LandingPage/LandingPageView'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Footer } from './components/Footer' 

function App() {
  

  return ( 
    <BrowserRouter>
      <div>Hello World</div>
      <Routes>
        <Route path='/' exact element={<LandingPage/>}/>
        <Route path='/products' element={<div>products</div>}/> 
        <Route path='/signIn' element={<div>signIn</div>}/>  
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    
  )
}
export default App

