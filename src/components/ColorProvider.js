import React, { useState, useContext, createContext } from 'react';
import initialsColors from '../data/colors.json';
import { v4 } from 'uuid';

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState(initialsColors);

  const addColor = (title, color) => {
    setColors([
      ...colors,
      {
        id: v4(),
        title,
        color,
        rating: 0,
      },
    ]);
  };

  const removeColor = id => setColors(colors.filter(color => color.id !== id));

  const rateColor = (id, rating) =>
    setColors(
      colors.map(color => (color.id === id ? { ...color, rating } : color))
    );

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
