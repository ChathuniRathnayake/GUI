import React from 'react';
import './ProgressBar.css'; // Import the standard CSS file

export const ProgressBar = ({ progress }) => {
  return (

    <div className="progressContainer">
        <div className="progressBar">
          <div className="progressFill" style={{ width: `${progress}%` }} />
        </div>
        <div className="progressText">{progress}%</div>
      </div>
  );
};

export default ProgressBar;
