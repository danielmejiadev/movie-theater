// Dependencies
import React from 'react';
import { States } from '../hooks/useFetch';
import { MoviesResults } from '../interfaces/MovieResults';

export interface MovieContext {
  movieResults: MoviesResults;
  state: States;
  error: unknown;
  setQuery: (query?: string) => void;
}

export const MovieContext = React.createContext({} as MovieContext);
