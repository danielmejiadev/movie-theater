import React from 'react';
import { Rating } from '../../helpers/ratings-ranges';
import { Start, sizes } from './styles';

interface StarRatingProps {
  starts?: number;
  rating?: number;
  size?: keyof typeof sizes;
  setRating?(rating: Rating): void;
}

function StarRating({
  starts = 5,
  rating = 0,
  size = 'normal',
  setRating
}: StarRatingProps): JSX.Element {
  return (
    <>
      {[...Array(starts)].map((_, index) => (
        <Start
          key={index}
          size={size}
          isSelected={rating >= index + 1}
          onClick={() => setRating?.((index + 1) as Rating)}
        >
          ★
        </Start>
      ))}
    </>
  );
}

export default StarRating;
