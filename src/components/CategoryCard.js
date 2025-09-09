
import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ title, imageUrl, linkTo }) => {
  return (
    <Link to={linkTo} className="category-card-link">
      <div className="category-card green">
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
