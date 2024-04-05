import { useState } from "react";
const Payment = () => {
  const [data, setData] = useState([]);

  fetch("/api/pay")
    .then((response) => response.json)
    .then((json) => {
      console.log(json);
      setData(json);
    });

  return <div></div>;
};

export default Payment /
  // import React from "react";
  // import { useState, useEffect } from "react";
  // import "./Payment.css";
  // const Payment = () => {
  //   const [recieptData, setRecieptData] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch("/api/pay");
  //         console.log(response);
  //         const jsonData = await response.json();
  //         setReceiptData(jsonData);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  //   return <div>Payment page</div>;
  // };

  // export default Payment;
  //
  // import React, { useState, useEffect } from "react";
  // import "./Payment.css";
  //
  // const Payment = () => {
  //   const [receiptData, setReceiptData] = useState([]);
  //
  //   useEffect(() => {
  // const fetchData = async () => {
  //   try {
  // const response = await fetch("/api/pay");
  // const jsonData = await response.json();
  // setReceiptData(jsonData);
  //   } catch (error) {
  // console.error("Error fetching data:", error);
  //   }
  // };

  // fetchData();
  //   }, []);

  //   try {
  // const response = await fetch("/api/pay", {
  //   method: "POST",
  //   headers: {
  // "Content-Type": "application/json",
  //   },
  // });
  // const data = await response.json();
  // setDataToSend(response.data);
  //   } catch (error) {
  // console.error("Error fetching data:", error);
  // Handle errors (optional)
  //   }
  // };
  //   return (
  // <div>
  {
    /* <h1>Payment Page</h1> */
  };
{
  /* <ul> */
}
{
  /* {receiptData.map((item, index) => ( */
}
//   <li key={index}>{item}</li>
// ))}
{
  /* </ul> */
}
{
  /* </div> */
}
//   );
// };
//
// export default Payment;
//
