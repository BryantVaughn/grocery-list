import React from 'react';
import useInputState from './hooks/useInputState';
import { TextField } from '@material-ui/core';

export default function EditGroceryForm({ id, edit, item, toggleIsEditing }) {
  const [value, handleChange, reset] = useInputState(item);

  return (
    <form onSubmit={ (evt) => {
      evt.preventDefault();
      edit(id, value);
      reset();
      toggleIsEditing();
    }}>
      <TextField
        margin="normal"
        value={ value }
        onChange={ handleChange }
        fullWidth
      />
    </form>
  );
}
