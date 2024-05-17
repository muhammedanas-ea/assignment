import axios from "axios";
import { GenerateError } from "../toast/Toast";

const axiosInterceptorInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

axiosInterceptorInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 400) {
      GenerateError(error.response.data.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInterceptorInstance;
