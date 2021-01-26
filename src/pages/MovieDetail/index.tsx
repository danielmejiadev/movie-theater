import React, { useCallback } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import movieApi from '../../movieApi';
import { Movie } from '../../interfaces/Movie';
import { currencyFormatter } from '../../helpers/currency-helper';
import StarRating from '../../components/Rating';
import Suspense from '../../components/Suspense';
import {
  GridContainer,
  Overlay,
  ImageContainer,
  Content,
  Title,
  Tags,
  Tagline,
  Rating,
  OverviewTitle,
  Overview,
  Tag
} from './styles';

function MovieDetail(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const getMovieDetail = useCallback(() => movieApi.movies.movieDetail(+id), [
    id
  ]);
  const [movie, state] = useFetch(getMovieDetail, {} as Movie);
  const {
    backdrop_path,
    poster_path,
    release_date,
    tagline,
    overview,
    original_title,
    genres,
    status,
    budget,
    revenue,
    vote_average
  } = movie;
  const releaseYear = moment(release_date).format('YYYY');
  const release = moment(release_date).format('MM/DD/YYYY');
  const tags = genres?.map(({ name }) => name).join(', ');

  return (
    <Suspense state={state}>
      <GridContainer image={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}>
        <Overlay>
          <ImageContainer>
            <img
              alt="poster"
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            />
          </ImageContainer>
          <Content>
            <Title>{`${original_title} (${releaseYear})`}</Title>
            <Tags>{`${release} ${tags}`}</Tags>
            <Rating>
              <StarRating starts={1} rating={1} size="large" />
              <span>{vote_average}</span>
            </Rating>
            <Tagline>{tagline}</Tagline>
            <OverviewTitle>Overview</OverviewTitle>
            <Overview>{overview}</Overview>
            <Tag>
              <strong>Status</strong>
              {status}
            </Tag>
            <Tag>
              <strong>Budget</strong>
              {budget ? currencyFormatter.format(budget) : '-'}
            </Tag>
            <Tag>
              <strong>Revenue</strong>
              {revenue ? currencyFormatter.format(revenue) : '-'}
            </Tag>
          </Content>
        </Overlay>
      </GridContainer>
    </Suspense>
  );
}

export default MovieDetail;
