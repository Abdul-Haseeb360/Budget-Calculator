import React, { createContext, useContext, useState, ReactNode } from "react";

// Define types for transactions and context
interface Transaction {
  type: "income" | "expense";
  amount: number;
  description: string;
  category: string;
  id: number;
}

interface BudgetContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  incomeData: (string | number)[][];
  expenseData: (string | number)[][];
}

// Create a context with a default value
const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export const useBudget = () => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error("useBudget must be used within a BudgetContextProvider");
  }
  return context;
};

export const BudgetContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [incomeData, setIncomeData] = useState<(string | number)[][]>([
    ["Category", "Income"],
    ["Salary", 0],
    ["Rental Income", 0],
    ["Business", 0],
    ["Stocks", 0],
  ]);
  const [expenseData, setExpenseData] = useState<(string | number)[][]>([
    ["Category", "Expense"],
    ["Shopping", 0],
    ["Food", 0],
    ["Entertain", 0],
    ["Grocery", 0],
  ]);

  // Function to update charts based on transactions
  const updateCharts = (newTransaction: Transaction) => {
    if (newTransaction.type === "income") {
      setIncomeData((prevData) =>
        prevData.map((category) =>
          category[0] === newTransaction.category
            ? [category[0], (category[1] as number) + newTransaction.amount]
            : category
        )
      );
    } else {
      setExpenseData((prevData) =>
        prevData.map((category) =>
          category[0] === newTransaction.category
            ? [category[0], (category[1] as number) + newTransaction.amount]
            : category
        )
      );
    }
  };

  // Add transaction and update chart
  const addTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
    updateCharts(transaction);
  };

  return (
    <BudgetContext.Provider value={{ transactions, addTransaction, incomeData, expenseData }}>
      {children}
    </BudgetContext.Provider>
  );
};
