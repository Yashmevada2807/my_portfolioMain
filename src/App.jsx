import {BrowserRouter as Router ,Routes ,Route ,Link} from 'react-router-dom'
import './App.css'
import Home from './components/home'
import About from './components/About'
import MyProject from './components/MyProject'
import Contact from './components/Contact'

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
            <Link className='hover:scale-[105%] duration-350' to='/MyProject'>MyProject</Link>
          </div>
          <div className='flex'>
            <Link className='hover:scale-[110%] duration-300' to="/Contact">MyContact</Link>
          </div>
        </div>
      </nav>
      

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/aboutme' element={<About />}/>
        <Route path='/myproject' element={<MyProject />}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <footer className='flex justify-center my-5 items-center'>
        all copyrights reserved
      </footer>
    </>
    </Router>
  )
}

export default App
