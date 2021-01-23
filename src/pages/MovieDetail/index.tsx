import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { States, useFetch } from '../../hooks/useFetch';
import movieApi from '../../movieApi';

function Detail(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const getMovieDetail = useCallback(() => movieApi.movies.movieDetail(+id), [id]);
  const [movie, state] = useFetch(getMovieDetail, undefined);

  if ([States.IDLE, States.LOADING].includes(state)) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h2>{movie?.original_title}</h2>
    </div>
  )
}

export default Detail;
