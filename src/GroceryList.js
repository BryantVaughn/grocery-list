import React from 'react';
import GroceryItem from './GroceryItem';
import { Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import { Divider } from '@material-ui/core';

export default function GroceryList({ groceries, remove, toggle, edit }) {
  if (groceries.length)
    return (
      <Paper>
        <List>
          { groceries.map((item, idx) => (
            <React.Fragment key={ item.id }>
              <GroceryItem
                { ...item }
                remove={ remove }
                toggle={ toggle }
                edit={ edit }
              />
              { idx < groceries.length - 1 && <Divider /> }
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}