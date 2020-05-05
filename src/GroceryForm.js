import React from 'react';
import { Paper } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState';

export default function GroceryForm({ addGroceryItem }) {
  const [value, handleChange, reset] = useInputState("");

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={ evt => {
          evt.preventDefault();
          addGroceryItem(value);
          reset();
        }}
      >
        <TextField
          value={ value }
          onChange={ handleChange }
          margin="normal"
          label="Add Grocery Item"
          fullWidth
        />
      </form>
    </Paper>
  );
}
