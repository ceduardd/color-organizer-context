import React from 'react';
import Color from './Color';
import { useColors } from './ColorProvider';

const ColorList = () => {
  const { colors } = useColors();

  if (colors.length === 0) return <div>No colors listed. Add a color.</div>;

  return (
    <div className="color-list">
      {colors.map(color => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
};

export default ColorList;
