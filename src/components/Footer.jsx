import React from 'react';
import logo from "../images/logo.png";

function Footer() {
  return (
    <footer className="bg-[#F3D0D2] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img 
                className="w-14 h-auto rounded-full shadow-sm" 
                src={logo} 
                alt="WIT Unite logo. it is a < with a red heart and > followed by Women in Tech" 
              />
              <h2 className="text-lg font-semibold text-gray-800">WIT Unite</h2>
            </div>
            <p className="text-gray-700 text-sm">© 2024 WIT Unite. All rights reserved.</p>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a 
                  href="mailto:womenintechunite@gmail.com" 
                  className="text-gray-700 hover:text-gray-900 hover:underline transition-colors"
                >
                  witunite@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="/accessibility" 
                  className="text-gray-700 hover:text-gray-900 hover:underline transition-colors"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a 
                  href="/privacy-policy" 
                  className="text-gray-700 hover:text-gray-900 hover:underline transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
