import React from 'react';
import styles from './Dashboard.module.css';

export const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}px` }} />
      </div>
      <div className={styles.progressText}>{progress}%</div>
    </div>
  );
};
export default ProgressBar;