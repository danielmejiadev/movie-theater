import React from 'react';
import moment from 'moment';
import { ImageContainer, Image, Title, Date, Content } from './styles';

interface MovieCardProps {
  onClick: () => void;
  title: string;
  releaseDate: string;
  imagePath?: string;
}

function MovieCard({
  title,
  imagePath,
  releaseDate,
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
        <Title>{title}</Title>
        <Date>{moment(releaseDate).format('MMM DD, YYYY')}</Date>
      </Content>
    </div>
  );
}

export default MovieCard;
