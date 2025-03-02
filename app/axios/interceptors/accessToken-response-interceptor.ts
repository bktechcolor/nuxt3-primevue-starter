import type { AxiosInstance } from 'axios';

export default function setup(axiosInstance: AxiosInstance): void {
  axiosInstance.interceptors.response.use(
    async (response) => {
      return Promise.resolve(response);
    },
    (err: unknown) => {
      return Promise.reject(err);
    },
  );
}
