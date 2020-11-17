//Making useContext Hook for handling purchase on different pages(children)

import React, { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext();
const useShoppingCartContext = () => useContext(ShoppingCartContext);

const ShoppingCartProvider = ({ children }) => {
  const purchaseCart = [];
  const [displayItems, setDisplayItems] = useState(JSON.parse(localStorage.getItem('movieapp.purchase')));

  const handlePurchase = (id, movie) => {
    purchaseCart.push({ id, movie });
    alert('your item has been added to your shopping bag');
    localStorage.setItem('movieapp.purchase', JSON.stringify(purchaseCart));

  }

  const handleRemove = (id, state) => {
    const totalProducts = JSON.parse(localStorage.getItem('movieapp.purchase'));
    const newCart = totalProducts.filter(item => id !== item.id);
    localStorage.setItem('movieapp.purchase', JSON.stringify(newCart));
    state(newCart);
  }






  return (
    <ShoppingCartContext.Provider value={{ handlePurchase, handleRemove, displayItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export {
  ShoppingCartContext,
  ShoppingCartProvider,
  useShoppingCartContext,
};
