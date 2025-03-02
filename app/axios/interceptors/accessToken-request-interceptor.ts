import type { AxiosInstance } from 'axios';

const IMPERSONATED_CLIENT_HEADER = 'X-Client';
export default function setup(axiosInstance: AxiosInstance): void {
  axiosInstance.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem('authToken')
      // if (config.headers.has(IMPERSONATED_CLIENT_HEADER))
      //   config.headers.delete(IMPERSONATED_CLIENT_HEADER);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config;
    },
    (err: unknown) => {
      return Promise.reject(err);
    },
  );
}
