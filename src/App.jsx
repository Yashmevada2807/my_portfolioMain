import {BrowserRouter as Router ,Routes ,Route ,Link ,useLocation} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import MyProject from './components/MyProject'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/aboutme' element={<About />}/>
        <Route path='/myprojects' element={<MyProject />}/>
        <Route path='/contacts' element={<Contact />}/>
      </Routes>
      
    </>
    </Router>
  )
}

export default App
