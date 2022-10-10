import axios from "axios"
import config from "../config"

export const tokenStorageKey = "token"

const getHeaders = () => {
  const token = localStorage.getItem(tokenStorageKey);
  return {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    "Content-Type": "application/json",
  };
};

export const API_DEFAULTS = {
  baseURL: config.baseURL,
  headers: getHeaders(),
};

const api = axios.create({
  baseURL: config.baseUrl,
});

api.interceptors.response.use(
  response => {
    try {
      const { data } = response;
      return data;
    } catch (error) {
      // this failed, so let's redirect to the login page
      console.log(error);
    }
  },
  function (error) {
    if (
      error.response.status === 401
    ) {
      localStorage.removeItem("tokenStorageKey")
      window.location.href = "/login"
    }
  }
)

const setRequestInterceptors = () => {
  api.interceptors.request.use((config) => {
    const defaultHeaders = getHeaders();
    config.headers = { ...defaultHeaders, ...config.headers };
    return config;
  });
};

setRequestInterceptors();

export { api, setRequestInterceptors };

