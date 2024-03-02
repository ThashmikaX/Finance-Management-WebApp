import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsNavOpen(false);
  };

  const handleNavOpenClick = () => {
    setIsNavOpen(true);
    setIsSearchOpen(false);
  };

  const handleNavCloseClick = () => {
    setIsNavOpen(false);
  };

  return (
    <nav
      className={`nav ${isSearchOpen ? "openSearch" : ""} ${
        isNavOpen ? "openNav" : ""
      }`}
    >
      <i className="uil uil-bars navOpenBtn" onClick={handleNavOpenClick}></i>
      <a href="/#" className="logo">
        Finance Tracker
      </a>

      <ul className="nav-links">
        <i
          className="uil uil-times navCloseBtn"
          onClick={handleNavCloseClick}
        ></i>
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/core">Dashboard</a>
        </li>
        <li>
          <a href="trust">Our Trusters</a>
        </li>
        <li>
          <a href="/aboutus">About Us</a>
        </li>
      </ul>

      <i
        className={`uil uil-search search-icon ${
          isSearchOpen ? "openSearch" : ""
        }`}
        id="searchIcon"
        onClick={handleSearchClick}
      ></i>
      <div className={`search-box ${isSearchOpen ? "openSearch" : ""}`}>
        <i className="uil uil-search search-icon"></i>
        <input type="text" placeholder="Search here..." />
      </div>
    </nav>
  );
};

export default Navbar;
