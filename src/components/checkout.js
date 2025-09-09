import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import "./checkout.css";

const CheckoutPage = () => {
  const location = useLocation();
  const { totalPrice } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState("cash"); // Default to cash on delivery
  const [orderConfirmed, setOrderConfirmed] = useState(false); // State to track order confirmation
  const [confirmationMessage, setConfirmationMessage] = useState(""); // Message to display after order confirmation

  const navigate = useNavigate(); // Add this line to initialize navigate

  // Function to handle payment method change
  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  // Function to handle redirection on Cancel
  const handleCancel = () => {
    navigate("/cart"); // This redirects to the cart page
  };

  // Handle Cash on Delivery confirmation
  const handleCashOnDelivery = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    const message = [
      "Your order has been confirmed successfully!",
      `Order placed on: ${formattedDate}`,
      "You can collect your order from our college farm at the following address:",
      "[College Farm Address]",
      "Thank you for choosing Cash on Delivery.",
    ];

    // Set confirmation message
    setConfirmationMessage(message);
    
    // Navigate to confirmation page
    navigate("/order-confirmation", {
      state: { confirmationMessage: message }
    });
  };

  // Handle the Razorpay payment
  const handleRazorpayPayment = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay key ID
      amount: totalPrice * 100, // Amount is in paise (1 INR = 100 paise)
      currency: "INR",
      name: "Your Shop Name",
      description: "Order Payment",
      image: "https://example.com/your-logo.png", // Optional: Your logo or brand image
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        // Handle post-payment logic here (e.g., update order status)

        // Set confirmation message
        const message = [
          "Your order has been confirmed successfully!",
          `Order placed on: ${new Date().toLocaleString()}`,
          "Thank you for choosing Online Payment.",
        ];

        // Navigate to confirmation page
        navigate("/order-confirmation", {
          state: { confirmationMessage: message }
        });
      },
      prefill: {
        name: "Customer Name", // Prefill customer details
        email: "customer@example.com",
        contact: "1234567890",
      },
      notes: {
        address: "Some address",
      },
      theme: {
        color: "#F37254", // You can customize this color
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open(); // Open Razorpay payment popup
  };

  return (
    <div className="checkout-page">
      <h2>Your Order Summary</h2>

      <div className="checkout-summary">
        {totalPrice !== undefined ? (
          <p>
            <strong>Total Price:</strong> ₹ {totalPrice}
          </p>
        ) : (
          <p>Your cart is empty. Please add items to your cart.</p>
        )}
      </div>

      <div className="payment">
        <h2>Select your payment method</h2>

        <div className="payment-options">
          <label>
            <input
              type="radio"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={handlePaymentChange}
            />
            Cash on delivery
          </label>

          <label>
            <input
              type="radio"
              value="online"
              checked={paymentMethod === "online"}
              onChange={handlePaymentChange}
            />
            Online Payment
          </label>
        </div>
      </div>

      <div className="actions">
        {paymentMethod === "online" ? (
          <button
            className="confirm"
            onClick={handleRazorpayPayment}
          >
            Proceed with Online Payment
          </button>
        ) : (
          <button className="confirm" onClick={handleCashOnDelivery}>
            Confirm Order (Cash on Delivery)
          </button>
        )}

        {/* Cancel button to go back to the cart page */}
        <button className="cancel" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
