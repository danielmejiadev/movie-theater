import React from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper } from './styles';
import { useMovie } from '../../hooks/useMovie';
import { Movie } from '../../interfaces/Movie';
import Header from '../../components/Header';
import SearchResults from '../../components/SearchResults';
import MovieList from '../../components/MovieList';
import Suspense from '../../components/Suspense';

function Home(): JSX.Element {
  const history = useHistory();
  const goToMovieDetail = ({ id }: Movie) => history.push(`movieDetail/${id}`);
  const {
    movieResults: { results },
    state,
    query
  } = useMovie();

  return (
    <div>
      <Header />
      <Wrapper>
        <Suspense state={state}>
          {query ? (
            <SearchResults onMovieClicked={goToMovieDetail} />
          ) : (
            <MovieList
              header={<h2>Most popular</h2>}
              movies={results}
              onMovieClicked={goToMovieDetail}
              emptyComponent={<h3>There are no popular movies</h3>}
            />
          )}
        </Suspense>
      </Wrapper>
    </div>
  );
}

export default Home;
