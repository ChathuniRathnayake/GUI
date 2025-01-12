import React from 'react';
import { Button } from '../Button/Button';
import styles from './SocialLogin.module.css';

export const SocialLogin = () => {
  const socialButtons = [
    { name: 'Google', variant: 'social' },
    { name: 'Facebook', variant: 'social' }
  ];

  return (
    <div className={styles.socialContainer}>
      <span className={styles.loginText}>Log in using</span>
      {socialButtons.map((button) => (
        <Button 
          key={button.name}
          variant={button.variant}
          className={styles.socialButton}
        >
          {button.name}
        </Button>
      ))}
    </div>
  );
};

export default SocialLogin;