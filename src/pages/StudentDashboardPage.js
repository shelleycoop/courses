// src/pages/StudentDashboardPage.js
import React from 'react';
import StudentDashboard from '../components/StudentDashboard';
import { getEnrolledCourses } from '../services/api';

const StudentDashboardPage = () => {
  // Assuming you have a function to fetch enrolled courses for the current student
  const enrolledCourses = getEnrolledCourses();

  return (
    <div>
      <h2>Student Dashboard Page</h2>
      <StudentDashboard enrolledCourses={enrolledCourses} />
    </div>
  );
};

export default StudentDashboardPage;
