import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src="godrejLogo.jpg" alt="godrej_Logo" />
      </div>
      <div className="nav-item">
        <div>HAIR COLOR</div>
        <div>CONTACT US</div>
        <div>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
