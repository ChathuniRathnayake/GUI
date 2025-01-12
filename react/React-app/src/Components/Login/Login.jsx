import React  from 'react';
import { Button } from '../Button/Button';
import { SocialLogin } from '../SocialLogin/SocialLogin';
import styles from './Login.module.css';

export const Login = () => {
  return (
    <form className={styles.formContainer}>
      <div className={styles.inputGroup}>
        <label htmlFor="username" className="visually-hidden">Username</label>
        <input
          id="username"
          type="text"
          className={styles.input}
          placeholder="Username"
          aria-label="Username"
        />
        
        <label htmlFor="password" className="visually-hidden">Password</label>
        <input
          id="password"
          type="password"
          className={styles.input}
          placeholder="Password"
          aria-label="Password"
        />
      </div>

      <Button variant="primary">Log in</Button>
      
      <div className={styles.forgotCredentials}>
        <a href="#" className={styles.forgotLink}>Forgot username or password?</a>
      </div>

        <SocialLogin/>      
      
      <div className={styles.divider}>or</div>
      
      <Button variant="secondary">Sign up</Button>
    </form>
  );
};

export default Login;