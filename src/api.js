// import axios from "axios";

// const API = axios.create({
//   baseURL: "/api"
// });

// export default API;
// import axios from "axios";

// const API = axios.create({
//   // baseURL: "http://13.201.63.42:5001/api"
//  baseURL: "http://13.232.250.5:5001/api"
// });

// export default API;


import axios from "axios";

// Get API URL from environment variable or use AWS backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  (typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'http://localhost:5001/api'
    : 'http://13.232.250.5:5001/api');

const API = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if it exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle response errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default API;