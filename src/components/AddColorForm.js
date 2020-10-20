import React from 'react';
import useInput from '../hooks/useInput';
import { useColors } from './ColorProvider';

const AddColorForm = () => {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');

  const { addColor } = useColors();

  const submit = e => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form className="add-form">
      <input
        type="text"
        placeholder="type a color..."
        {...titleProps}
        required
      />
      <input type="color" {...colorProps} required />
      <button onClick={submit}>Add</button>
    </form>
  );
};

export default AddColorForm;
