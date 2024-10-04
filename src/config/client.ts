import axios, { InternalAxiosRequestConfig } from "axios";
import camelcaseKeys from "camelcase-keys";
import snakecaseKeys from "snakecase-keys";

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

apiInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.data = config.data
    ? snakecaseKeys(config.data, { deep: true })
    : config.data;
  return config;
});

apiInstance.interceptors.response.use((response) => {
  if (response.config.responseType === "blob") return response;
  response.data &&= camelcaseKeys(response.data, { deep: true });
  return response;
});
