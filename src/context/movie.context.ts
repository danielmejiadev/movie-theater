// Dependencies
import React from 'react';
import { Rating } from '../helpers/ratings-ranges';
import { States } from '../hooks/useFetch';
import { MoviesResults } from '../interfaces/MovieResults';

export interface MovieContext {
  movieResults: MoviesResults;
  state: States;
  error: unknown;
  query?: string;
  setQuery: (query?: string) => void;
  setRating: (rating?: Rating) => void;
  rating?: Rating;
}

export const MovieContext = React.createContext({} as MovieContext);
