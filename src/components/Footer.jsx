import React from 'react';
import '../css/footer.css';
import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="footer">
      <img className="logo" src={logo} alt="WIT Unite logo. it is a < with a red heart and > followed by Women in Tech" />

      <div className="text">
        <span>Created By <a href="#">WIT Unite</a> | &#169; 2024 All Rights Reserved</span>
      </div>
    </div>
  );
}

export default Footer;
