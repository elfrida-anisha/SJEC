import React, { useState } from "react";
import { useCart } from "./cartcontext"; 
import "./ProductCategoryPage.css";

const ProductCategoryPage = () => {
  const [activeTab, setActiveTab] = useState("veggies");
  const [successMessage, setSuccessMessage] = useState(""); 
  const { addToCart } = useCart(); 

  const products = {
    veggies: [
      { id: 1, name: "Ladies Finger", price: 40, oldPrice: 45, img: "./Assets/ladies_finger.jpg" },
      { id: 2, name: "Tomato", price: 29, oldPrice: 35, img: "./Assets/tomato.jpeg" },
      { id: 3, name: "Brinjal", price: 30, oldPrice: 35, img: "./Assets/brinjal.webp" },
      { id: 4, name: "Ridge Gourd", price: 35, oldPrice: 40, img: "./Assets/ridge_GOURD.jpg" }
    ],
    fruits: [
      { id: 5, name: "Apple", price: 100, oldPrice: 120, img: "./Assets/Apple.webp" },
      { id: 6, name: "Banana", price: 40, oldPrice: 50, img: "./Assets/Banana.jpeg" },
      { id: 7, name: "Kiwi", price: 80, oldPrice: 90, img: "./Assets/Kiwi.webp" }
    ]
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
      <h2>Fresh Fruits & Vegetables</h2>

      
      {successMessage && <div className="success-message">{successMessage}</div>}

      <div className="tabs">
        <button
          className={activeTab === "veggies" ? "active" : ""}
          onClick={() => setActiveTab("veggies")}
        >
          Veggies
        </button>
        <button
          className={activeTab === "fruits" ? "active" : ""}
          onClick={() => setActiveTab("fruits")}
        >
          Fruits
        </button>
      </div>

      <div className="product-grid">
        {products[activeTab].map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹ {item.price}.00 / kg</p>
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
