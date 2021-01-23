import { AxiosRequestConfig } from 'axios';
import MovieApi from './movieApi';

const { REACT_APP_BASE_URL } = process.env;

function configureGlobalAuthToken(config: AxiosRequestConfig) {
  const { REACT_APP_TOKEN_MOVIE } = process.env;
  config.headers = {
    Authorization: `Bearer ${REACT_APP_TOKEN_MOVIE}`
  };
  return config;
}

const movieApi = new MovieApi(
  REACT_APP_BASE_URL as string
).addRequestInterceptor(configureGlobalAuthToken);

export default movieApi;
