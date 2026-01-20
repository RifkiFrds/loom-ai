import axios from 'axios';

// Create a centralized axios instance
const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with actual API base URL or env variable
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor for logging or auth tokens
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for global error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle global errors (e.g., 401 Unauthorized)
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
