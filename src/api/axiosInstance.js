import axios from "axios";

const API_BASE_URL = "https://ttdc.skeintech.com:8001/valueStreaks";

// Create instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Automatically add token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//Handle error codes globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      console.warn("Unauthorized! Token may have expired.");
      // Optional: clear token and redirect to login
      localStorage.removeItem("token");
      // window.location.href = "/login"; // Uncomment if needed
    } else if (status === 403) {
      console.warn("Forbidden! You don't have permission.");
    } else if (status >= 500) {
      console.error("Server error! Please try again later.");
    }

    // Always reject to let individual calls catch the error
    return Promise.reject(error);
  }
);

export default api;
