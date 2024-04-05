import React from "react";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import "../Pages/Profile.css";
import axios from "axios";
const PayBtn = ({ to }) => {
  const navigate = useNavigate();
  //   const [dataToSend, setDataToSend] = useState;
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
