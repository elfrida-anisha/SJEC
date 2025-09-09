import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Farm Shop</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <div
          onClick={() => navigate("/category")}
          style={{
            width: "200px",
            height: "150px",
            backgroundColor: "#dfffd8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            borderRadius: "12px",
          }}
        >
          🥦 Vegetables & Fruits
        </div>
      </div>
    </div>
  );
};

export default Home;
