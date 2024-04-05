// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import "../Pages/Profile.css";
// import axios from "axios";
// const PayBtn = ({ to }) => {
//   const navigate = useNavigate();
//   const [dataToSend, setDataToSend] = useState(0);
//   const handleClick = () => {
// navigate(to);
//   };
//   return (
// <button onClick={handleClick} className="payBtn">
{
  /* Pay */
}
{
  /* </button> */
}
//   );
// };
//
// export default PayBtn;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Pages/Profile.css";
import axios from "axios";
const PayBtn = ({ to, BillId }) => {
  const navigate = useNavigate();
  const [dataToSend, setDataToSend] = useState(0);
  const handleClick = async () => {
    navigate(to);

    try {
      const response = await fetch("/api/pay", {
        method: "POST",
        body: JSON.stringify({
          bill_id: BillId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setDataToSend(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors (optional)
    }
  };

  //   };
  return (
    <button onClick={handleClick} className="payBtn">
      Pay
    </button>
  );
};

export default PayBtn;
