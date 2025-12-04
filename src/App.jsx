import React from 'react'
import './App.css'
import Header from './components/Header'
import Pricing from './components/pricing'
import Subscribtion from './components/Subscribtion'
import Footer from './components/Footer'


function App() {
 
  return (
    <>
      <div className="bg-[#020103]">
        <Header/> 
        <Pricing/>
        <Subscribtion/>
        <Footer/>
      </div>   
    </>
  )
}

export default App
