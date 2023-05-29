import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.DEV
    ? import.meta.env.VITE_BACKEND_DEV_URL
    : import.meta.env.VITE_BACKEND_PROD_URL,

  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
