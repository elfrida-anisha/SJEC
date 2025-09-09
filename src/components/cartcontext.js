import React, { createContext, useState, useContext } from "react";

// Create Cart Context
const CartContext = createContext();

// Cart Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      updateItemQuantity(item.id, existingItem.quantity + 1);
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Update item quantity
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

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
