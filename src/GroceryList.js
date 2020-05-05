import React from 'react';
import GroceryItem from './GroceryItem';
import { Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import { Divider } from '@material-ui/core';

export default function GroceryList(props) {
  return (
    <Paper>
      <List>
        { props.groceries.map(groceryItem => (
          <>
            <GroceryItem
              item={ groceryItem.item }
              key={ groceryItem.id }
              completed={ groceryItem.found }
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
