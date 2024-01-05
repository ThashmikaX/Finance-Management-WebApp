import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import home from './Components/Home/home'

const App = () => {
  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <home />
      </div>
    </div>
  )
}

export default App
