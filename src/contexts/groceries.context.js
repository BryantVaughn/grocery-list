import React, { createContext } from 'react';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';
import GroceryReducer from '../reducers/grocery.reducer';

const defaultGroceries = [
  { id: 1, item: "Bananas", found: false },
  { id: 2, item: "Milk", found: false }
];

export const GroceriesContext = createContext();
export const DispatchContext = createContext();

export function GroceriesProvider(props) {
  const [groceries, dispatch] = useLocalStorageReducer(
    "groceries", defaultGroceries, GroceryReducer
  );

  return (
    <GroceriesContext.Provider value={ groceries }>
      <DispatchContext.Provider value={ dispatch }>
        { props.children }
      </DispatchContext.Provider>
    </GroceriesContext.Provider>
  );
}