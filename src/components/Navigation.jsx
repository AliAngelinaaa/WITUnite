import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../css/navbar.css';

function Navigation() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('mode') === 'dark-mode');
  const [searchActive, setSearchActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  // Effect for handling dark mode class on body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('mode', !darkMode ? 'dark-mode' : 'light-mode');
  };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <nav className={`${sidebarActive ? 'active' : ''}`}>
      <div className="nav-bar">
        {/* Sidebar toggle icon */}
        <i className={`bx bx-menu ${sidebarActive ? 'sidebarOpen' : ''}`} onClick={toggleSidebar}></i>
        
        {/* Logo */}
        <span className="logo navLogo">
          <Link to="/">
            <img className="logo" src={logo} alt="WIT Unite logo" />
          </Link>
        </span>

        {/* Sidebar menu */}
        <div className={`menu ${sidebarActive ? 'active' : ''}`}>
          <div className="logo-toggle">
            <span className="logo">
              <Link to="/">WIT Unite</Link>
            </span>
            <i className="bx bx-x siderbarClose" onClick={toggleSidebar}></i>
          </div>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/mtc">Meet Our Community</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul>
        </div>

        {/* Dark mode and search */}
        <div className="darkLight-searchBox">
          <div className="dark-light" onClick={toggleDarkMode}>
            <i className={`bx ${darkMode ? 'bx-moon' : 'bx-sun'}`}></i>
          </div>

          <div className="searchBox">
            <div className={`searchToggle ${searchActive ? 'active' : ''}`} onClick={toggleSearch}>
              <i className={`bx ${searchActive ? 'bx-x cancel' : 'bx-search search'}`}></i>
            </div>

            <div className={`search-field ${searchActive ? 'active' : ''}`}>
              <input type="text" placeholder="Search..." />
              <i className="bx bx-search"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
