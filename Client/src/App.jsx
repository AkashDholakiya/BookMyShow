import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Routes/Home'
import Navbaar from './Component/Navbaar'
import Footer from './Component/Footer'
import Detailpage from './Component/Detailpage'
import './App.css'

const App = () => { 
  return (
    <>
      <BrowserRouter> 
        <div id='main-content'> 
          <Navbaar/> 
          <Routes>   
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Detailpage />} />
          </Routes>
        </div>
          <Footer/>
      </BrowserRouter> 
    </>
  )
}

export default App
