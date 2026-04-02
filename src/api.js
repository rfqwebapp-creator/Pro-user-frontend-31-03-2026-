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

// Determine API URL based on environment
let API_BASE_URL;

if (typeof window !== 'undefined') {
  const hostname = window.location.hostname;
  
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    // Local development
    API_BASE_URL = 'http://localhost:5001/api';
  } else {
    // Production - Use Cloudflare Tunnel for HTTPS support
    API_BASE_URL = 'https://explicitly-societies-handle-competent.trycloudflare.com/api';
  }
} else {
  API_BASE_URL = 'https://explicitly-societies-handle-competent.trycloudflare.com/api';
}

console.log('🔗 API Base URL:', API_BASE_URL);

const API = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
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