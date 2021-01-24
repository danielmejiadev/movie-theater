import React, { useState } from 'react';
import { Start, sizes } from './styles';

interface StarRatingProps {
  starts?: number;
  defaultValue?: number;
  size?: keyof typeof sizes;
}

function StarRating({
  starts = 5,
  defaultValue = 0,
  size = 'normal'
}: StarRatingProps): JSX.Element {
  const [rating, setRating] = useState(defaultValue);

  return (
    <>
      {[...Array(starts)].map((_, index) => (
        <Start
          key={index}
          size={size}
          isSelected={rating >= index + 1}
          onClick={() => setRating(index + 1)}
        >
          ★
        </Start>
      ))}
    </>
  );
}

export default StarRating;
