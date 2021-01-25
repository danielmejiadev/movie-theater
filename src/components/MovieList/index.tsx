import React from 'react';
import { Grid, Empty } from './styles';
import { Movie } from '../../interfaces/Movie';
import MovieCard from '../../components/MovieCard';

interface MovieListProps {
  header: React.ReactNode;
  onMovieClicked: (movie: Movie) => void;
  movies?: Movie[];
  emptyComponent?: React.ReactNode;
}

function MovieList({
  header,
  onMovieClicked,
  movies = [],
  emptyComponent
}: MovieListProps): JSX.Element {
  return (
    <div>
      {header}
      {movies.length === 0 && <Empty>{emptyComponent}</Empty>}
      <Grid>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            onClick={() => onMovieClicked(movie)}
            title={movie.title}
            imagePath={movie.poster_path}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
          />
        ))}
      </Grid>
    </div>
  );
}
export default MovieList;
