// Dependencies
import { useCallback, useRef, useState } from 'react';
import { MovieContext } from '../context/movie.context';
import { Rating } from '../helpers/ratings-ranges';
import { useFetch } from '../hooks/useFetch';
import { useField } from './useField';
import movieApi from '../movieApi';

export function useMovieState(): MovieContext {
  const input = useField();
  const [query, setQuery] = useState<undefined | string>();
  const [rating, setRating] = useState<undefined | Rating>();

  const fetchResults = useCallback(() => {
    setRating(undefined);
    if (query) {
      return movieApi.search.filterMovies(query);
    }

    return movieApi.discover.popularMovies();
  }, [query]);

  const [movieResults, state, error] = useFetch(fetchResults, {});

  return {
    movieResults,
    state,
    error,
    input,
    query,
    setQuery,
    setRating,
    rating
  };
}
