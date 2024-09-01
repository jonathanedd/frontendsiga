import axios from "axios";

// const API_URL = `http://localhost:4000/api/v2`;
// const API_URL = "https://sigaexpressnodeapi-d0eshvg2cqb4bhbn.eastus-01.azurewebsites.net";

const API_URL = process.env.REACT_APP_API_URL;

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
