import React from 'react';
import { useHistory } from 'react-router-dom';
import { States } from '../../hooks/useFetch';
import MovieCard from '../../components/MovieCard';
import Header from '../../components/Header';
import { GridContainer } from './styles';
import { useMovie } from '../../hooks/useMovie';

function Home(): JSX.Element {
  const { movieResults, state } = useMovie();
  const history = useHistory();

  return (
    <div>
      <Header />
      {[States.IDLE, States.LOADING].includes(state) && <p>Loading</p>}
      <GridContainer>
        {movieResults.results?.map((movie) => (
          <MovieCard
            key={movie.id}
            onClick={() => history.push(`movieDetail/${movie.id}`)}
            title={movie.title}
            imagePath={movie.poster_path}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
          />
        ))}
      </GridContainer>
    </div>
  );
}

export default Home;
