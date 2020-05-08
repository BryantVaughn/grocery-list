import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD":
      return [...state, { id: uuidv4(), item: action.item, completed: false }]
    case "REMOVE":
      return state.filter(item => item.id !== action.id)
    case "TOGGLE":
      return state.map(item => 
        item.id === action.id ? { ...item, found: !item.found } : item
      );
    case "EDIT":
      return state.map(item =>
        item.id === action.id ? { ...item, item: action.item } : item
      );
    default:
      return state;
  }
};

export default reducer;