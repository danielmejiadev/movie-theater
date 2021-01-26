import React from 'react';
import { Start, sizes } from './styles';

interface StarRatingProps {
  starts?: number;
  rating?: number;
  size?: keyof typeof sizes;
  setRating?(rating?: number): void;
}

function StarRating({
  starts = 5,
  rating = 0,
  size = 'normal',
  setRating
}: StarRatingProps): JSX.Element {
  return (
    <>
      {[...Array(starts)].map((_, index) => {
        const currentRating = index + 1;
        const isSelected = rating >= currentRating;
        const sameRating = rating === currentRating;

        return (
          <Start
            key={index}
            size={size}
            isSelected={isSelected}
            onClick={() => setRating?.(sameRating ? undefined : currentRating)}
          >
            ★
          </Start>
        );
      })}
    </>
  );
}

export default StarRating;
