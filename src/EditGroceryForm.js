import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { TextField } from '@material-ui/core';
import { GroceriesContext } from './contexts/groceries.context';

export default function EditGroceryForm({ id, item, toggleIsEditing }) {
  const { editGroceryItem } = useContext(GroceriesContext);
  const [value, handleChange, reset] = useInputState(item);

  return (
    <form
      onSubmit={ (evt) => {
        evt.preventDefault();
        editGroceryItem(id, value);
        reset();
        toggleIsEditing();
      }}
      style={{ margin: "0 1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={ value }
        onChange={ handleChange }
        fullWidth
        autoFocus
      />
    </form>
  );
}
