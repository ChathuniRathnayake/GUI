import React  from 'react';
import { Button } from '../Button/Button';
import './Login.css'; 

export const Login = () => {
  return (
    <form className="formContainer">
      <div className="inputGroup">
        <label htmlFor="username" className="visually-hidden">Username</label>
        <input
          id="username"
          type="text"
          className="input"
          placeholder="Username"
          aria-label="Username"
        />
        
        <label htmlFor="password" className="visually-hidden">Password</label>
        <input
          id="password"
          type="password"
          className="input"
          placeholder="Password"
          aria-label="Password"
        />
      </div>

      <Button variant="primary">Log in</Button>     
      
      <div className="divider">or</div>
      
      <Button variant="secondary">Sign up</Button>
    </form>
  );
};

export default Login;