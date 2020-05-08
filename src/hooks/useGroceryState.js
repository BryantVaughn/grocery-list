import useLocalStorageState from './useLocalStorageState';
import { v4 as uuidv4 } from 'uuid';

export default initialGroceries => {
  const [groceries, setGroceries] = useLocalStorageState("groceries", initialGroceries);
  return {
    groceries,
    addGroceryItem: newGroceryText => {
      setGroceries([...groceries, { id: uuidv4(), item: newGroceryText, completed: false }])
    },
    removeGroceryItem: groceryId => {
      const updatedGroceries = groceries.filter(item => item.id !== groceryId);
      setGroceries(updatedGroceries);
    },
    toggleGroceryItem: groceryId => {
      const updatedGroceries = groceries.map(item =>
        item.id === groceryId ? { ...item, found: !item.found } : item
      );
      setGroceries(updatedGroceries);
    },
    editGroceryItem: (groceryId, newItem) => {
      const updatedGroceries = groceries.map(item =>
        item.id === groceryId ? { ...item, item: newItem } : item
      );
      setGroceries(updatedGroceries);
    }
  };
}
