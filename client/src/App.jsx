import React from 'react'
import { Navbar } from './Components'
import { Hero, Core } from './Pages'
import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

const App = () => {
  return (
      <Router>
        <div className='container1'>
        <Navbar />
        <Routes>

          <Route path='/' element={<Hero />} />
          <Route path='/core' element={<Core />} />

        </Routes>
        </div>
      </Router>
    
  )
}

export default App
