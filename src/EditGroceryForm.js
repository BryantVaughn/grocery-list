import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { TextField } from '@material-ui/core';
import { DispatchContext } from './contexts/groceries.context';

export default function EditGroceryForm({ id, item, toggleIsEditing }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(item);

  return (
    <form
      onSubmit={ (evt) => {
        evt.preventDefault();
        dispatch({ type: "EDIT", id: id, item: value });
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
