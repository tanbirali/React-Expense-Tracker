import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import Transaction from "./Transaction";
import "../App.css";
const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transaction.map((trans) => (
          <Transaction key={trans.id} trans={trans} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
