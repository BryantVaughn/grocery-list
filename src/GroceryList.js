import React from 'react';
import GroceryItem from './GroceryItem';
import { Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import { Divider } from '@material-ui/core';

export default function GroceryList({ groceries, remove, toggle, edit }) {
  return (
    <Paper>
      <List>
        { groceries.map((item, idx) => (
          <>
            <GroceryItem
              id={ item.id }
              item={ item.item }
              key={ item.id }
              found={ item.found }
              remove={ remove }
              toggle={ toggle }
              edit={ edit }
            />
            { idx < groceries.length - 1 && <Divider /> }
          </>
        ))}
      </List>
    </Paper>
  );
}
