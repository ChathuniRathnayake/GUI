import React from 'react';
import styles from './Dashboard.module.css';

export const CourseCard = ({ title }) => {
  return (
    <div className={styles.courseCard}>
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