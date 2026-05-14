import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer'
import About from './Pages/About/About'

function App() {

  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      <About/>
      <Footer/>
    </>
  )
}

export default App
