import React, { useState } from "react";
import { useCart } from "./cartcontext";
import "./ProductCategoryPage.css";

const ProductCategoryPage = () => {
  const [activeTab] = useState("veggies");
  const [successMessage, setSuccessMessage] = useState(""); 
 const { addToCart } = useCart();

  const products = {
    veggies: [
      { name: "Eggs", price: 7, oldPrice: 8, img: "./Assets/eggs.jpg" },
      
    ],
   
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    setSuccessMessage(`"${item.name}" has been added to your cart.`);

    // Clear the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="category-page">
      <h2>Eggs</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}


            <div className="product-grid">
        {products[activeTab].map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹ {item.price}.00 /egg</p>
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
