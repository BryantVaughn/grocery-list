import { useState } from 'react';

export default (initialValue = false) => {
  // call useState, "reserve piece of state"
  const [state, setState] = useState(initialValue);
  const toggle = () => {
    setState(!state);
  };
  // return piece of state AND a function to toggle it
  return [state, toggle];
}
