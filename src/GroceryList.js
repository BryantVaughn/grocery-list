import React, { useContext } from 'react';
import GroceryItem from './GroceryItem';
import { Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { GroceriesContext } from './contexts/groceries.context';

export default function GroceryList() {
  const groceries = useContext(GroceriesContext);
  if (groceries.length)
    return (
      <Paper>
        <List>
          { groceries.map((item, idx) => (
            <React.Fragment key={ item.id }>
              <GroceryItem { ...item } />
              { idx < groceries.length - 1 && <Divider /> }
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}