import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; // Update with your local JSON Server URL

const api = axios.create({
  baseURL: BASE_URL,
});

export const getSampleCourses = async () => {
  try {
    const response = await api.get('/sample-courses');
    return response.data;
  } catch (error) {
    console.error('Error fetching sample courses:', error);
    throw error;
  }
};

export const getCourseDetails = async (courseId) => {
  try {
    const response = await api.get(`/sample-courses/${courseId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching course details for ID ${courseId}:`, error);
    throw error;
  }
};

export const getEnrolledCourses = async () => {
    try {
      const response = await api.get('/enrolled-courses'); // Adjust the endpoint accordingly
      return response.data;
    } catch (error) {
      console.error('Error fetching enrolled courses:', error);
      throw error;
    }
  };