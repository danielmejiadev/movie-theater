// Dependencies
import { useCallback, useState } from 'react';
import { MovieContext } from '../context/movie.context';
import { useFetch } from '../hooks/useFetch';
import movieApi from '../movieApi';

export function useMovieState(): MovieContext {
  const [query, setQuery] = useState<undefined | string>();
  const fetchResults = useCallback(() => {
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
    setQuery
  };
}
