import React from "react";
import { useState, useEffect } from "react";
import "../Pages/Profile.css";
import PayBtn from "../Components/PayBtn";
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
        const response = await fetch("/api/Profile");
        console.log(response);
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
          {/* <th className="details">Name</th> */}
          <th className="details">Fee</th>
          <th className="details">Due</th>
          <th className="details">Fine</th>
          <th className="details">Status</th>
        </tr>

        <div className="scroll_area">
          {historyData.map((singleRow) => {
            return (
              <tr>
                <td className="rows">{singleRow["month"]}</td>
                <td className="rows">{singleRow["admno"]}</td>
                <td className="rows">{singleRow["lhid"]}</td>
                {/* <td className="rows">{singleRow["name"]}</td> */}
                <td className="rows">{singleRow["fee"]}</td>
                <td className="rows">{singleRow["due"]}</td>
                <td className="rows">{singleRow["fine"]}</td>

                <td>
                  {singleRow[7] != "paid" ? (
                    <PayBtn to="/Payment" BillId={singleRow["billid"]} />
                  ) : (
                    singleRow["status"]
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
