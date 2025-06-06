import React from "react";
import imgLogo from "../assets/images/Logo.jpg";

function Logo() {
  return (
    <div className="LogoContainer">
    <img 
      src = { imgLogo }  
      className="App-logo"
      alt="logo" 
    />
    </div>
  );
}

export default Logo;

