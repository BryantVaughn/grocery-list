import React from 'react';
import GroceryList from './GroceryList';
import GroceryForm from './GroceryForm';
import { GroceriesProvider } from './contexts/groceries.context';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Grid } from '@material-ui/core';

export default function GroceryApp() {

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px"}}>
        <Toolbar>
          <Typography color="inherit">Grocery List</Typography>
        </Toolbar>
      </AppBar>
      <Grid 
        container
        justify="center"
        style={{ marginTop: "1rem" }}
      >
        <Grid
          item
          xs={ 11 }
          md={ 8 }
          lg={ 4 }
        >
          <GroceriesProvider>
            <GroceryForm />
            <GroceryList />
          </GroceriesProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}
