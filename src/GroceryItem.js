import React from 'react';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function GroceryItem({ id, item, found, remove, toggle }) {
  return (
    <ListItem>
      <Checkbox
        tabIndex={ -1 }
        checked={ found }
        onClick={ () => toggle(id) }
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
        <IconButton aria-label="Edit">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Delete" onClick={() => remove(id) }>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
