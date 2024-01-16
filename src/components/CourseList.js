import React, { useEffect, useState } from 'react';
import { getSampleCourses } from '../services/api';

const CourseList = ({ onCourseClick }) => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getSampleCourses();
        setCourses(data);
      } catch (error) {
        // Handle error as needed
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Course List</h2>
      <input
        type="text"
        placeholder="Search by course name or instructor"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredCourses.map(course => (
          <li key={course.id} onClick={() => onCourseClick(course.id)}>
            {course.name} - {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
