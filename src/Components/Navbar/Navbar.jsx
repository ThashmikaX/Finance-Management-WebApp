import React from 'react'
import './Navbar.css'
import './script.jsx'

const Navbar = () => {
  return (
    <>
    <script src="script.js" defer></script>
    <nav class="nav">
      <i class="uil uil-bars navOpenBtn"></i>
      <a href="#" class="logo">CodingLab</a>

      <ul class="nav-links">
        <i class="uil uil-times navCloseBtn"></i>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>

      <i class="uil uil-search search-icon" id="searchIcon"></i>
      <div class="search-box">
        <i class="uil uil-search search-icon"></i>
        <input type="text" placeholder="Search here..." />
      </div>
    </nav>
    </>
  )
}

export default Navbar
