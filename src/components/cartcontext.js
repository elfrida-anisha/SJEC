import React, { createContext, useState, useContext } from "react";


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      updateItemQuantity(item.id, existingItem.quantity + 1);
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };


  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };


  const clearCart = () => {
    setCart([]);
  };

  
  const updateItemQuantity = (id, quantity) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);
