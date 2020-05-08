import React, { useContext } from 'react';
import { Paper } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState';
import { GroceriesContext } from './contexts/groceries.context';

export default function GroceryForm() {
  const [value, handleChange, reset] = useInputState("");
  const { dispatch } = useContext(GroceriesContext);

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={ evt => {
          evt.preventDefault();
          dispatch({ type: "ADD", item: value })
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
