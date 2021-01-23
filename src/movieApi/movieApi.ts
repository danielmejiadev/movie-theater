// Depedencies
import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

// Resources
import Discover from './resources/discover';
import Search from './resources/search';

/**
 * Movie service for API connection.
 * @author Daniel Mejia
 * @class MovieApi
 */
export class MovieApi {
  axiosInstance: AxiosInstance;
  discover: Discover;
  search: Search;

  constructor(url: string) {
    this.axiosInstance = axios.create({ baseURL: url });
    this.addResponseInterceptor(this.basicResponse);

    this.discover = new Discover(this.axiosInstance);
    this.search = new Search(this.axiosInstance);
  }

  /**
   * Add a request interceptor for client.
   * @param { Function } callback The callback to add.
   * @returns { MovieApi } The client itself.
   */
  addRequestInterceptor(
    callback: (request: AxiosRequestConfig) => AxiosRequestConfig
  ): MovieApi {
    const { interceptors } = this.axiosInstance;
    interceptors.request.use(callback);
    return this;
  }

  /**
   * Add a response interceptor for client.
   * @param { Function } callback The callback to add.
   * @returns { MovieApi } The client itself.
   */
  addResponseInterceptor<T>(
    callback: (
      value: AxiosResponse<T>
    ) => AxiosResponse<T> | Promise<AxiosResponse<T>>
  ): MovieApi {
    const { interceptors } = this.axiosInstance;
    interceptors.response.use(callback);
    return this;
  }

  /**
   * Intercepts every response.
   * @param { AxiosResponse } response The response.
   * @returns { AxiosResponse.data } The new response parsed.
   */
  basicResponse = <T>(response: AxiosResponse<T>): AxiosResponse['data'] =>
    response.data;
}

export default MovieApi;
