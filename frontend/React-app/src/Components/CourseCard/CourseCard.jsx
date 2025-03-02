import React from 'react';
import './CourseCard.css';


export const CourseCard = ({ title }) => {
  return (
    <div className="courseCard">
      {title.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    
    </div>
  );
};
export default CourseCard;
