// Dependencies
import React from 'react';
import { MovieContext } from '../context/movie.context';

export function useMovie(): MovieContext {
  return React.useContext(MovieContext);
}
