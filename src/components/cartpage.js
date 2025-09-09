import React from "react";
import { useNavigate } from "react-router-dom"; 
import { useCart } from "./cartcontext";  
import { FaPlus, FaMinus } from "react-icons/fa";  
import "./cartpage.css";  
const CartPage = () => {
  const { cart, removeFromCart, clearCart, updateItemQuantity } = useCart(); 
  const navigate = useNavigate(); 

  
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  
  const handleCheckout = () => {
    navigate("/checkout", { state: { totalPrice } });
  };

  
  const increaseQuantity = (item) => {
    updateItemQuantity(item.id, item.quantity + 1);
  };

  
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty!</p>
        </div>
      ) : (
        <div>
          
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                
                <img
                  src={item.img}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>₹ {item.price} </p>

                 
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn" 
                      onClick={() => decreaseQuantity(item)}>
                      <FaMinus />
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      className="quantity-btn" 
                      onClick={() => increaseQuantity(item)}>
                      <FaPlus />
                    </button>
                  </div>

                  <p>Total: ₹ {item.price * item.quantity}</p>
                </div>

                
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

         
          <div className="cart-summary">
            <p>
              <strong>Total Price:</strong> ₹ {totalPrice}
            </p>

            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
