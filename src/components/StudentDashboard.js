import React from 'react';

const StudentDashboard = ({ enrolledCourses }) => {
  return (
    <div>
      <h2>Student Dashboard</h2>
      <ul>
        {enrolledCourses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
