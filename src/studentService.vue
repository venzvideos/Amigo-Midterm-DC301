// src/services/studentService.js
import apiClient from './axios';

export default {
  // Get all feedback
     getFeedback() {
        return apiClient.get('/students'); // Fetches from http://localhost:3000/students
    },

  // Submit new feedback
  submitFeedback(data) {
                   return apiClient.post('/students', data);
  }
};