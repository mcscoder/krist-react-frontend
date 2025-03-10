import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Navigate to the login route when authentication failed
    if (error.response?.status === 401) {
      window.location.href = "/auth";
    }
    return Promise.reject(error);
  }
);
