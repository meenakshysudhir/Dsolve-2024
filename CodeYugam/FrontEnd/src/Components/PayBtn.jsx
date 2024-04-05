import React from "react";
import { useNavigate } from "react-router-dom";
import "../Pages/Profile.css";
const PayBtn = ({ to }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to);
  };
  return (
    <button onClick={handleClick} className="payBtn">
      Pay
    </button>
  );
};

export default PayBtn;
