import React from 'react';
import CourseDetails from '../components/CourseDetails';
import { getCourseDetails } from '../services/api';

const CourseDetailsPage = ({ match }) => {
  const { courseId } = match.params;

  // Assuming you have a function to fetch course details by ID
  const course = getCourseDetails(courseId);

  return (
    <div>
      <h2>Course Details Page</h2>
      {course ? <CourseDetails course={course} /> : <p>Course not found</p>}
    </div>
  );
};

export default CourseDetailsPage;
