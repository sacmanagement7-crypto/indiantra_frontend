import axios from "axios";

const api = axios.create({
  // baseURL: "http://13.204.164.7/api",
  // baseURL:"https://api.swadeshiemall.com/api",
  baseURL:"https://api.indiantra.com/api",
  // baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token automatically to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // get token from localStorage or wherever you store it
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
