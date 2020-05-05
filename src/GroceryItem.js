import React from 'react';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { DeleteIcon } from '@material-ui/icons';

export default function GroceryItem({ item, completed }) {
  return (
    <ListItem>
      <Checkbox tabIndex={ -1 } checked={ completed } />
      <ListItemText>
        { item }
      </ListItemText>
    </ListItem>
  );
}
