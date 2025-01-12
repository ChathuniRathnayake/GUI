import React from "react";
import { Login } from "./Components/Login/Login";
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.columns}>
          <div className={styles.formColumn}>
            <div className={styles.formWrapper}>
              <Login />
            </div>
          </div>
          <div className={styles.imageColumn}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/799fd9adc43fe0be473de6cddeb99f5b070765e4b2593555ea59abceaef32819?placeholderIfAbsent=true&apiKey=a758d963065447fbbb07b22e1d316b48"
              alt="Login illustration"
              className={styles.image}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;