import React, { useState } from "react";
import "./ProductCategoryPage.css";
import { useCart } from "./cartcontext"; 

const ProductCategoryPage = () => {
  const [activeTab] = useState("veggies");
  const [successMessage, setSuccessMessage] = useState(""); 
  const { addToCart } = useCart();

  
  const products = {
    veggies: [
      { id: 8, name: "Puff", price: 20, oldPrice: 25, img: process.env.PUBLIC_URL +"/Assets/puff.jpg" },
      { id: 9, name: "Cookies", price: 19, oldPrice: 25, img: process.env.PUBLIC_URL+ "/Assets/cookie.jpeg" },
      { id: 10, name: "Pizza", price: 149, oldPrice: 200, img:process.env.PUBLIC_URL+ "/Assets/pizza.jpg" },
      { id: 11, name: "Bread", price: 39, oldPrice: 50, img: process.env.PUBLIC_URL+"/Assets/bread.jpg" }
    ],
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    setSuccessMessage(`"${item.name}" has been added to your cart.`);

    
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="category-page">
      <h2>Bakery Items</h2>

      
      {successMessage && <div className="success-message">{successMessage}</div>}

      <div className="product-grid">
        {products[activeTab].map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹ {item.price}.00 </p>
            <small style={{ textDecoration: "line-through" }}>₹ {item.oldPrice}.00</small>
            <div>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryPage;
