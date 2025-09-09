import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "./cartcontext";  
import "./Sidebar.css";

const Sidebar = () => {
  const { cart } = useCart();  
  return (
    <div className="sidebar">
      
      <nav>
        <NavLink to="/cart" className="nav-item">
         🛒({cart.length}) 
        <NavLink to="/" className="nav-item">Home</NavLink>
        <NavLink to="/ProductCategoryPage" className="nav-item">Vegetables & Fruits</NavLink>
        <NavLink to="/bakeryitems" className="nav-item">Bakery</NavLink>
        <NavLink to="/eggsprice" className="nav-item">Eggs</NavLink>
        
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
