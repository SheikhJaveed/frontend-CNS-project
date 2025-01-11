// VaultContext.jsx
import React, { createContext, useState } from "react";

export const VaultContext = createContext();

export const VaultProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index, updatedItem) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, ...updatedItem } : item
    );
    setItems(updatedItems);
  };

  return (
    <VaultContext.Provider value={{ items, addItem, deleteItem, editItem }}>
      {children}
    </VaultContext.Provider>
  );
};
