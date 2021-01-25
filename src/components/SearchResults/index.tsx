import React from 'react';
import { Filter } from './styles';
import { useMovie } from '../../hooks/useMovie';
import { Movie } from '../../interfaces/Movie';
import MovieList from '../MovieList';
import Rating from '../Rating';
import { ranges } from '../../helpers/ratings-ranges';

interface SearchResultsProps {
  onMovieClicked: (movie: Movie) => void;
}

function SearchResults({ onMovieClicked }: SearchResultsProps): JSX.Element {
  const { movieResults, query, rating, setRating } = useMovie();
  const { results } = movieResults;
  const filteredMovies = results?.filter(({ vote_average }) => {
    if (rating) {
      const [min, max] = ranges[rating];
      return vote_average >= min && vote_average <= max;
    }

    return true;
  });

  return (
    <MovieList
      header={
        <Filter>
          <h2>{`Search results for: ${query}`}</h2>
          <h3>Rating:</h3>
          <Rating rating={rating} setRating={setRating} />
        </Filter>
      }
      movies={filteredMovies}
      onMovieClicked={onMovieClicked}
      emptyComponent={<h2>There are no results for your search</h2>}
    />
  );
}

export default SearchResults;
