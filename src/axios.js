// src/services/axios.js
import axios from 'axios';

const apiClient = axios.create({
baseURL: 'http://localhost:3000', // Changed back to 3000!
  timeout: 10000, // Wait 10 seconds before timing out
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;