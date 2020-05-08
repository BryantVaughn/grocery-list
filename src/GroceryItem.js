import React, { useContext } from 'react';
import useToggleState from './hooks/useToggleState';
import EditGroceryForm from './EditGroceryForm';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { GroceriesContext } from './contexts/groceries.context';

export default function GroceryItem({ id, item, found }) {
  const { dispatch } = useContext(GroceriesContext);
  const [isEditing, toggleIsEditing] = useToggleState(false);

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditGroceryForm
          id={ id }
          item={ item }
          toggleIsEditing={ toggleIsEditing }
        /> 
      ) : (
        <>
          <Checkbox
            tabIndex={ -1 }
            checked={ found }
            onClick={ () => dispatch({ type: "TOGGLE", id: id }) }
          />
          <ListItemText
            style={{
              textDecoration: found
                ? "line-through"
                : "none"
            }}
            >
            { item }
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", id: id })}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
