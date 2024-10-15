




import React, { createContext, useContext, useState } from 'react';

interface BudgetContextType {
  totalIncome: number;
  totalExpense: number;
  addIncome: (amount: number) => void;
  addExpense: (amount: number) => void;
  amount: number;
  setAmount: (amount: number) => void;
}

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export const BudgetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [amount, setAmount] = useState<number>(0);

  const addIncome = (amount: number) => {
    setTotalIncome((prev) => prev + amount);
  };

  const addExpense = (amount: number) => {
    setTotalExpense((prev) => prev + amount);
  };

  
  return (
    <BudgetContext.Provider value={{ totalIncome, totalExpense, addIncome, addExpense,amount,setAmount }}>
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }
  return context;
};




