import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * Base service for http request.
 * @author Daniel Mejia
 * @class Base
 */
export class Base {
  /**
   * The axios instance to make http request.
   * @type { AxiosInstance }
   */
  axiosInstance: AxiosInstance;

  /**
   * The default resourceUrl to get values.
   * @type { String }
   */
  resourceUrl!: string;

  /**
   * Creates an instance of Base.
   */
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  /**
   * Make a get request.
   * @param { AxiosRequestConfig } [requestParams=this.defaultParams] The params to make the request.
   * @return { Promise<any> } The data promise.
   */
  list = <T>(requestParams: AxiosRequestConfig): Promise<T> => {
    const { url = this.resourceUrl, params, ...rest } = requestParams;
    return this.axiosInstance.get<T, T>(url, { params, ...rest });
  };
}

export default Base;
