import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { States, useFetch } from '../../hooks/useFetch';
import movieApi from '../../movieApi';
import MovieCard from '../../components/MovieCard';
import Header from '../../components/Header';
import { GridContainer } from './styles';

function Home(): JSX.Element {
  const fetchPopularMovies =useCallback(() => movieApi.discover.popularMovies(), []);
  const [data, state] = useFetch(fetchPopularMovies, {});
  const history = useHistory();

  if ([States.IDLE, States.LOADING].includes(state)) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <Header />
      <GridContainer>
        {data.results?.map((movie) => (
          <MovieCard
            key={movie.id}
            onClick={() => history.push(`movieDetail/${movie.id}`)}
            title={movie.title}
            imagePath={movie.poster_path}
            releaseDate={movie.release_date}
          />
        ))}
      </GridContainer>
    </div>
  );
}

export default Home;
