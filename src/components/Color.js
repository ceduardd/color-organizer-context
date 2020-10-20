import React from 'react';
import StarRating from './StarRating';
import { FaTrash } from 'react-icons/fa';
import { useColors } from './ColorProvider';

const Color = ({ id, title, color, rating }) => {
  const { rateColor, removeColor } = useColors();
  return (
    <section className="color-section">
      <h2>{title}</h2>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div
        style={{ height: '50px', backgroundColor: color }}
        className="color-content"
      ></div>
      <StarRating
        selectedStars={rating}
        onRate={rating => rateColor(id, rating)}
      />
    </section>
  );
};

export default Color;
