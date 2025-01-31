import React from "react";
import './Header.css';

function Header() {
  return (
    <header className="header">
        <div className="logo">E</div>
        <h1 className="platformTitle">ElevatEd</h1>
        <div className="userInfo">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd92665210d20b020830dbfb07744720d40a8333ea96946b6f9e8065ce70b8d0?placeholderIfAbsent=true&apiKey=a758d963065447fbbb07b22e1d316b48"
            alt="User profile"
            className="userAvatar"
          />
          <span className="username">Chathuni Rathnayake</span>
        </div>
      </header>
  )
}

export default Header;
