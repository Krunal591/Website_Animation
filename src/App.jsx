import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Stairs from './components/common/Stairs.jsx'
import Navbar from './components/Naviagtion/Navbar.jsx'
import Fullscreennav from './components/Naviagtion/Fullscreennav.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Stairs>
          <Navbar />
          <Fullscreennav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/agence' element={<Agence />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </Stairs>
      </BrowserRouter>
    </>
  )
}

export default App
