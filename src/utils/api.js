import axios from "axios";

const API_URL = `http://localhost:4000/api/v2`;

const TIMEOUT = 5000;

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log("INTERCEPTOR TOKEN:", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(
      "Interceptor: Token agregado a la solicitud:",
      config.headers.Authorization
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
