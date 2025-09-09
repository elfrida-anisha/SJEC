import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import CategoryCard from "./components/CategoryCard";
import Bakery from "./components/Bakery";
import Egg from "./components/Egg";
import ProductCategoryPage from "./components/ProductCategoryPage";
import Bakeryitems from "./components/Bakeryitems.js";
import Eggsprice from "./components/eggsprice.js";
import CartPage from "./components/cartpage";  
import { CartProvider } from "./components/cartcontext"; 
import CheckoutPage from "./components/checkout"; 
import OrderConfirmationPage from "./components/confirm";

import "./App.css";

function App() {
  return (
    <CartProvider> 
      <div className="app-container" style={{ display: "flex" }}>
        <Sidebar />
        <div className="main-content" style={{ flex: 1, padding: "20px" }}>
          
          <Routes>
            <Route
              path="/"
              element={
                <div
                  className="category-list"
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    marginTop: "100px",
                  }}
                >
                  <CategoryCard
                    title="Vegetables & Fruits"
                    imageUrl="/Assets/vegetable.webp"
                    linkTo="/ProductCategoryPage"
                  />
                  <Bakery
                    title="Bakery"
                    imageUrl="/Assets/bakery.jpeg"
                    linkTo="/Bakeryitems"
                  />
                  <Egg
                    title="Eggs"
                    imageUrl="/Assets/Eggs.jpg"
                    linkTo="/eggsprice"
                  />
                </div>
              }
            />
            <Route path="/ProductCategoryPage" element={<ProductCategoryPage />} />
            <Route path="/bakeryitems" element={<Bakeryitems />} />
            <Route path="/eggsprice" element={<Eggsprice />} />
            <Route path="/cart" element={<CartPage />} />  
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          </Routes>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
