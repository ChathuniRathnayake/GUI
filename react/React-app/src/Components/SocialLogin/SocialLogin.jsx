import React from 'react';
import { Button } from '../Button/Button';
import './SocialLogin.css'; // Import the standard CSS file

export const SocialLogin = () => {
  const socialButtons = [
    { name: 'Google', variant: 'social' },
    { name: 'Facebook', variant: 'social' }
  ];

  return (
    <div className="socialContainer">
      <span className="loginText">Log in using</span>
      {socialButtons.map((button) => (
        <Button 
          key={button.name}
          variant={button.variant}
          className="socialButton"
        >
          {button.name}
        </Button>
      ))}
    </div>
  );
};

export default SocialLogin;
