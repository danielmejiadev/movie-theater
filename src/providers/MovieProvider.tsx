// Dependencies
import React from 'react';
import { MovieContext } from '../context/movie.context';
import { useMovieState } from '../hooks/useMovieState';

export interface MovieProviderProps {
  children: React.ReactNode;
}

function MovieProvider({ children }: MovieProviderProps): JSX.Element {
  const movieState = useMovieState();

  return (
    <MovieContext.Provider value={movieState}>{children}</MovieContext.Provider>
  );
}

export default MovieProvider;
