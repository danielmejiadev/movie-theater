import React from 'react';
import moment from 'moment';
import { ImageContainer, Image, Title, Date } from './styles';

interface MovieCardProps {
  title: string;
  releaseDate: string;
  imagePath?: string;
}

function MovieCard({ title, imagePath, releaseDate }: MovieCardProps) {
  return (
    <div>
      <ImageContainer>
        {imagePath && <Image alt="poster" src={`https://image.tmdb.org/t/p/w500/${imagePath}`} />}
      </ImageContainer>
      <div>
        <Title>{title}</Title>
        <Date>{moment(releaseDate).format('MMM DD, YYYY')}</Date>
      </div>
    </div>
  );
}

export default MovieCard;
