import React from "react";
import { useState, useEffect } from "react";
import "../Pages/Profile.css";
const History = () => {
  const [historyData, setHistoryData] = useState([
    // ["April", 220321, "22LH100", "Anu", 2003, 1200, 200, "unpaid"],
    // [" March", 220311, "21LH140", "Anu", 3000, 500, 800, "paid"],
    // ["Feb", 220521, "22LH105", "Anu", 2003, 1200, 200, "paid"],
    // ["Jan", 220891, "22LH103", "Anu", 2042, 2200, 100, "paid"],
    // [1, 1, 1, 1, 1, 1, 1, "unpaid"],
    // [1, 1, 1, 1, 1, 1, 1, "unpaid"],
    // [1, 1, 1, 1, 1, 1, 1, "unpaid"],
    // [1, 1, 1, 1, 1, 1, 1, "unpaid"],
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/bill");
        const jsonData = await response.json();
        setHistoryData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="AllBills">
      <h2 className="Heading">PAY YOUR BILLS</h2>
      <table className="singleBill">
        <tr className="headRow">
          <th className="details">Month</th>
          <th className="details">Admn No.</th>
          <th className="details">LH No.</th>
          <th className="details">Name</th>
          <th className="details">Fee</th>
          <th className="details">Due</th>
          <th className="details">Fine</th>
          <th className="details">Status</th>
        </tr>

        <div className="scroll_area">
          {historyData.map((singleRow) => {
            return (
              <tr key={index}>
                <td className="rows">{singleRow[0]}</td>
                <td className="rows">{singleRow[1]}</td>
                <td className="rows">{singleRow[2]}</td>
                <td className="rows">{singleRow[3]}</td>
                <td className="rows">{singleRow[4]}</td>
                <td className="rows">{singleRow[5]}</td>
                <td className="rows">{singleRow[6]}</td>
                <td>
                  {singleRow[7] == "unpaid" ? (
                    <button className="payBtn">PAY</button>
                  ) : (
                    singleRow[7]
                  )}
                </td>
              </tr>
            );
          })}
        </div>
      </table>
    </div>
  );
};

export default History;
