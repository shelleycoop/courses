import React from 'react';
import CourseDetails from '../components/CourseDetails';

const CourseDetailsPage = ({ match }) => {
  const { courseId } = match.params;

  // Assuming you have a function to fetch course details by ID
  
    console.log(courseId, "courseId")
  return (
    <div>
      <h2>Course Details Page</h2>
         <CourseDetails courseId={courseId}/>
    </div>
  );
};

export default CourseDetailsPage;
