import React from 'react'
import './App.css'
import Header from './components/Header'
import Pricing from './components/pricing'
import Subscribtion from './components/Subscribtion'
import Footer from './components/Footer'
import Client from './components/Client'
import Features from './components/Features'
import Comapanies from './components/Comapanies'
import Bento from './components/Bento'
import HeroSection from './components/HeroSection'
import Graphs from './components/Graphs'

function App() {
 
  return (
    <>
      <div className="bg-[#020103]">
        <Header/>
        <HeroSection/>
        <Graphs/>
        <Comapanies/>
        <Bento/>
        <Features/>
        <Client/>
        <Pricing/>
        <Subscribtion/>
        <Footer/>
      </div>   
    </>
  )
}

export default App
