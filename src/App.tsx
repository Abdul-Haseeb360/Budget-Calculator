import React, { useState } from "react";
import "./App.css";
import Transaction from "./Components/Transaction";
import Available from "./Components/Avaliable";
import IncomeExpenses from "./Components/IncomeExpense";
import { BudgetContextProvider } from "./contexts/BudgetContextProvider";
import Container from "./Components/layout/Container";

interface Transaction {
  type: "income" | "expense";
  amount: number;
  description: string;
  category: string;
  id: number;
}

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [transactionType, setTransactionType] = useState<"income" | "expense">(
    "income"
  );

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const availableBalance = totalIncome - totalExpense;

  return (
    <BudgetContextProvider>
      <Container>
        <Available availableBalance={availableBalance} />
        <IncomeExpenses totalIncome={totalIncome} totalExpense={totalExpense} />
        <Transaction
          transactions={transactions}
          setTransactions={setTransactions}
          transactionType={transactionType}
          setTransactionType={setTransactionType}
        />
      </Container>
    </BudgetContextProvider>
  );
};

export default App;
