import React from "react";
import { Login } from "./Components/Login/Login";
import './LoginPage.css'; // Import the standard CSS file

export const LoginPage = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="columns">
          <div className="formColumn">
            <div className="formWrapper">
              <Login />
            </div>
          </div>
          <div className="imageColumn">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/799fd9adc43fe0be473de6cddeb99f5b070765e4b2593555ea59abceaef32819?placeholderIfAbsent=true&apiKey=a758d963065447fbbb07b22e1d316b48"
              alt="Login illustration"
              className="image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
