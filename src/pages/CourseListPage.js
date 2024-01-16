import React from 'react';
import CourseList from '../components/CourseList';

const CourseListPage = ({ history }) => {
  const handleCourseClick = courseId => {
    console.log("working",history )
    history.push(`/course-details/${courseId}`);
  };

  return (
    <div>
      <h2>Course List Page</h2>
      <CourseList onCourseClick={handleCourseClick} />
    </div>
  );
};

export default CourseListPage;
