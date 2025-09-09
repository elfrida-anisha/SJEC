import React from "react";
import { useNavigate } from "react-router-dom"; 
import { useCart } from "./cartcontext";  // Assuming you have the cart context
import { FaPlus, FaMinus } from "react-icons/fa";  // For the + and - icons
import "./cartpage.css";  // Assuming you have the CSS

const CartPage = () => {
  const { cart, removeFromCart, clearCart, updateItemQuantity } = useCart(); 
  const navigate = useNavigate(); 

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Handle checkout
  const handleCheckout = () => {
    navigate("/checkout", { state: { totalPrice } });
  };

  // Handle increasing quantity
  const increaseQuantity = (item) => {
    updateItemQuantity(item.id, item.quantity + 1);
  };

  // Handle decreasing quantity
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {/* If cart is empty */}
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty!</p>
        </div>
      ) : (
        <div>
          {/* Displaying cart items */}
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

                  {/* Quantity and change buttons */}
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

                {/* Remove from cart button */}
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Cart summary */}
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
