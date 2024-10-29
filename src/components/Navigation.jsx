import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../css/navbar.css';


function Navigation() {
  const [searchActive, setSearchActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          !event.target.classList.contains('bx-menu')) {
        setSidebarActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        <div className={`menu ${sidebarActive ? 'active' : ''}`} ref={menuRef}>
          <div className="logo-toggle">
            <span className="logo">
              <Link to="/"><img className="logo" src={logo} alt="WIT Unite logo" /></Link>
            </span>
            <i className="bx bx-x siderbarClose" onClick={toggleSidebar}></i>
          </div>

          <ul className="nav-links">
            <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
            <li><Link to="/services" onClick={toggleSidebar}>Services</Link></li>
            <li><Link to="/mtc" onClick={toggleSidebar}>Meet Our Community</Link></li>
            <li><Link to="/contactus" onClick={toggleSidebar}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Dark mode and search - modified to only show search */}
        <div className="darkLight-searchBox">
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
