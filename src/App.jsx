import {BrowserRouter as Router ,Routes ,Route ,Link} from 'react-router-dom'
import './App.css'
import Home from './components/home'
import About from './components/About'
import MyProject from './components/MyProject'

function App() {

  return (
    <Router>
      <>
      <nav className='w-full p-3 shadow-2xl bg-black '>
        <div className='text-white  flex justify-between items-center'>
          <div className="logo font-bold text-2xl px-3">
            Yash.me
          </div>
          <div className="routes flex gap-4  ">
            <Link className='hover:scale-[110%] duration-350' to='/'>Home</Link>
            <Link className='hover:scale-[110%] duration-350' to='/AboutMe'>AboutMe</Link>
            <Link className='hover:scale-[110%] duration-350' to='/MyProject'>MyProject</Link>
          </div>
          <div>
            contacts
          </div>
        </div>
      </nav>
      

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/aboutme' element={<About />}/>
        <Route path='/myproject' element={<MyProject />}/>
        <Route/>
      </Routes>
      <footer className='flex justify-center my-5 items-center'>
        all copyrights reserved
      </footer>
    </>
    </Router>
  )
}

export default App
