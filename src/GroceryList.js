import React from 'react';
import GroceryItem from './GroceryItem';
import { Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import { Divider } from '@material-ui/core';

export default function GroceryList({ groceries, remove, toggle }) {
  return (
    <Paper>
      <List>
        { groceries.map(item => (
          <>
            <GroceryItem
              id={ item.id }
              item={ item.item }
              key={ item.id }
              found={ item.found }
              remove={ remove }
              toggle={ toggle }
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
