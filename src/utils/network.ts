import axios, { AxiosResponse } from 'axios';

export default class Network {
  static async post<T>(
    url: string,
    param: T,
    options = {},
  ): Promise<AxiosResponse<any>> {
    try {
      axios.defaults.headers.common.Authorization = `bearer ${localStorage.getItem(
        'token',
      )}`;
      return await axios.post(url, param, options);
    } catch (e) {
      console.log(e);
    }
    return Promise.reject();
  }

  static async put<T>(url: string, params?: T): Promise<AxiosResponse<any>> {
    try {
      axios.defaults.headers.common.Authorization = `bearer ${localStorage.getItem(
        'token',
      )}`;

      return await axios.put(url, params);
    } catch (e) {
      console.log(e);
    }
    return Promise.reject();
  }

  static async patch<T>(url: string, param: T): Promise<AxiosResponse<any>> {
    try {
      axios.defaults.headers.common.Authorization = `bearer ${localStorage.getItem(
        'token',
      )}`;

      return await axios.patch(url, param);
    } catch (e) {
      console.log(e);
    }

    return Promise.reject();
  }

  static async delete<T>(url: string, params?: T): Promise<AxiosResponse<any>> {
    try {
      axios.defaults.headers.common.Authorization = `bearer ${localStorage.getItem(
        'token',
      )}`;

      return await axios.delete(url, {
        params,
      });
    } catch (e) {
      console.log(e);
    }
    return Promise.reject();
  }

  static async get<T>(url: string, params?: any): Promise<AxiosResponse<any>> {
    axios.defaults.headers.common.Authorization = `bearer ${localStorage.getItem(
      'token',
    )}`;

    return axios.get<T>(url, {
      params,
    });
  }
}
