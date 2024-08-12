import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Use import.meta.env instead of process.env
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
