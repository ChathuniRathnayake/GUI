import React from 'react';
import styles from './Dashboard.module.css';

export const ProfileInfo = ({ label, value }) => {
  return (
    <div className={styles.profileField}>
      <div>{label}</div>
      <div className={styles[`profile${label.replace(/\s+/g, '')}`]}>{value}</div>
    </div>
  );
};
export default ProfileInfo