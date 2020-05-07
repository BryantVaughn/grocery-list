import React, { createContext } from 'react';
import useGroceryState from '../hooks/useGroceryState';

const defaultGroceries = [
  { id: 1, item: "Bananas", found: false },
  { id: 2, item: "Milk", found: false }
];

export const GroceriesContext = createContext();

export function GroceriesProvider(props) {
  const groceryStuff = useGroceryState(defaultGroceries);

  return (
    <GroceriesContext.Provider value={ groceryStuff }>
      { props.children }
    </GroceriesContext.Provider>
  );
}