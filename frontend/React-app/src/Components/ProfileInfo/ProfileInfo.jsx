import React from 'react';
import './ProfileInfo.css'; 

export const ProfileInfo = ({ label, value }) => {
  return (
    <div className="profileField">
      <div>{label}</div>
      <div className={`profile${label.replace(/\s+/g, '')}`}>{value}</div>
    </div>
  );
};

export default ProfileInfo;
