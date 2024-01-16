import React, { useEffect, useState } from 'react';
import { getCourseDetails } from '../services/api';


const CourseDetails = ({ courseId }) => {
  
  const [course, setCourse] = useState([]);
  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourseDetails(courseId);
        setCourse(data);
      } catch (error) {
        // Handle error as needed
      }
    };

    fetchCourses();
  }, []);
  return (
    <div>
      <h2>Course Details</h2>
      <p><strong>Course Name:</strong> {course.name}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <p><strong>Pre-requisites:</strong> {course.prerequisites}</p>
      <details>
        <summary><strong>Syllabus:</strong></summary>
        <p>{course.syllabus}</p>
      </details>
    </div>
  );
};

export default CourseDetails;
