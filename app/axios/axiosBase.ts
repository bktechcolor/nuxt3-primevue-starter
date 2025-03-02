import type { AxiosInstance, AxiosRequestConfig } from 'axios';

import axios from 'axios';

export default class AxiosBase {
  protected axiosInstance: AxiosInstance;
  protected axiosConfig: AxiosRequestConfig;
  protected type: string;
  constructor(interceptors: unknown[], baseUrl: string, type = '') {
    this.type = type;
    this.axiosConfig = {
      baseURL: baseUrl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    this.axiosInstance = axios.create(this.axiosConfig);

    if (interceptors) {
      for (const interceptor of interceptors) {
        if (typeof interceptor !== 'function') {
          return;
        }
        interceptor(this.axiosInstance);
      }
    }
  }
}
