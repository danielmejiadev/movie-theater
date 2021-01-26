// Dependencies
import React from 'react';
import { Rating } from '../helpers/ratings-ranges';
import { States } from '../hooks/useFetch';
import { Field } from '../hooks/useField';
import { MoviesResults } from '../interfaces/MovieResults';

export interface MovieContext {
  movieResults: MoviesResults;
  state: States;
  error: unknown;
  input: Field;
  query?: string;
  setQuery: (query?: string) => void;
  setRating: (rating?: Rating) => void;
  rating?: Rating;
}

export const MovieContext = React.createContext({} as MovieContext);
