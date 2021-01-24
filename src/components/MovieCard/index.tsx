import React from 'react';
import moment from 'moment';
import StarRating from '../Rating';
import { ImageContainer, Image, Title, Date, Content, Rating } from './styles';

interface MovieCardProps {
  onClick: () => void;
  title: string;
  releaseDate: string;
  imagePath?: string;
  voteAverage: number;
}

function MovieCard({
  title,
  imagePath,
  releaseDate,
  voteAverage,
  onClick
}: MovieCardProps): JSX.Element {
  return (
    <div>
      <ImageContainer onClick={onClick}>
        {imagePath && (
          <Image
            alt="poster"
            src={`https://image.tmdb.org/t/p/w500/${imagePath}`}
          />
        )}
      </ImageContainer>
      <Content onClick={onClick}>
        <Rating>
          <StarRating starts={1} defaultValue={1} size="small" />
          <p>{voteAverage}</p>
        </Rating>
        <Title>{title}</Title>
        <Date>{moment(releaseDate).format('MMM DD, YYYY')}</Date>
      </Content>
    </div>
  );
}

export default MovieCard;
