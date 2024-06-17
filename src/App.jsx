import { useState } from "react";
import "./App.css";
import { GlobalProvider } from "./context/globalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransactions";
import IncomeExpenses from "./components/IncomeExpenses";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalProvider>
        <Header />
        <div className="conatainer">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
