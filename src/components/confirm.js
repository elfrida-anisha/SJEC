// OrderConfirmationPage.js
import React from "react";
import { useLocation } from "react-router-dom";
import "./confirm.css"; // Add any custom styles if necessary

const OrderConfirmationPage = () => {
  const location = useLocation();
  const { confirmationMessage } = location.state || {}; // Get message from state

  return (
    <div className="confirmation-page">
      <h2>Order Confirmation</h2>

      {confirmationMessage && (
        <div className="confirmation-message">
          {confirmationMessage.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}

      <button onClick={() => window.location.href = '/'}>Go to Home</button>
    </div>
  );
};

export default OrderConfirmationPage;
