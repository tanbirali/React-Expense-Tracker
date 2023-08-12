
import React from 'react';
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/globalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="conatainer">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />

      </div>


    </GlobalProvider>
  );
}

export default App;
