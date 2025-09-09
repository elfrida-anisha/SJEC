import React from 'react';
import './Egg.css';
import { Link } from 'react-router-dom';

const Egg = ({ title, linkTo }) => {
  return (
    <Link to={linkTo} className="category-card-link">
      <div className="category-card pink">
        <img src={process.env.PUBLIC_URL + '/Assets/eggs.jpg'} alt={title} />
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default Egg;
