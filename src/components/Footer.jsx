import React from 'react';
import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="bg-[#F3D0D2] py-4 text-center font-poppins">
      <img className="w-12 h-auto rounded-full overflow-hidden mx-auto" src={logo} alt="WIT Unite logo. it is a < with a red heart and > followed by Women in Tech" />

      <div className="text">
        <span className="text-[17px] font-normal text-black">
          Created By <a className="font-medium text-black hover:underline" href="#">WIT Unite</a> | &#169; 2024 All Rights Reserved
        </span>
      </div>
    </div>
  );
}

export default Footer;
