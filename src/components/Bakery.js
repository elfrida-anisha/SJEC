import React from 'react';
import './Bakery.css';
import { Link } from 'react-router-dom';

const Bakery = ({ title, linkTo }) => {
  return (
    <Link to={linkTo} className="category-card-link">
      <div className="category-card orange">
        <img src="/Assets/bakery.jpeg" alt={title} />
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default Bakery;
