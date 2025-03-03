import React from 'react';
import './CourseCard.css';


export const CourseCard = ({ title }) => {
  return (
    <div className="courseCard">
      {/*
      {title.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
        */}

      {imageUrl && <img src={imageUrl} alt={title} className="courseImage" />}
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Price:</strong> ${price}</p>

      {courses.map(course => (
      <CourseCard 
        key={course.id}
        title={course.name}
        description={course.description}
        price={course.price}
        imageUrl={`http://localhost:3000${course.image_url}`} // Adjust URL if needed
  />
))}
    
    </div>
  );
};
export default CourseCard;
