import React, { createContext, useReducer } from 'react';
import GroceryReducer from '../reducers/grocery.reducer';
import useGroceryState from '../hooks/useGroceryState';

const defaultGroceries = [
  { id: 1, item: "Bananas", found: false },
  { id: 2, item: "Milk", found: false }
];

export const GroceriesContext = createContext();

export function GroceriesProvider(props) {
  const [groceries, dispatch] = useReducer(GroceryReducer, defaultGroceries);

  return (
    <GroceriesContext.Provider value={{ groceries, dispatch }}>
      { props.children }
    </GroceriesContext.Provider>
  );
}