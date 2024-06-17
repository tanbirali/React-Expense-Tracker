import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import "../App.css";

const Balance = () => {
  const { transaction } = useContext(GlobalContext);

  const amount = transaction.map((trans) => trans.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4> Balance </h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};

export default Balance;
