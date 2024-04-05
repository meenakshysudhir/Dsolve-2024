import React from "react";
import { useState, useEffect } from "react";
import "../Pages/Profile.css";
const History = () => {
  const [historyData, setHistoryData] = useState([
    [1, 1, 1, 1, 1, 1, 1, "unpaid"],
    [1, 1, 1, 1, 1, 1, 1, "unpaid"],
    [1, 1, 1, 1, 1, 1, 1, "unpaid"],
    [1, 1, 1, 1, 1, 1, 1, "unpaid"],
    [1, 1, 1, 1, 1, 1, 1, "unpaid"],
  ]);

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
              <tr>
                <td className="rows">{singleRow[0]}</td>
                <td className="rows">{singleRow[1]}</td>
                <td className="rows">{singleRow[2]}</td>
                <td className="rows">{singleRow[3]}</td>
                <td className="rows">{singleRow[4]}</td>
                <td className="rows">{singleRow[5]}</td>
                <td className="rows">{singleRow[6]}</td>
                <td>
                  {singleRow[7] == "unpaid" ? (
                    <button>PAY</button>
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
