

import { createContext, ReactNode, useContext, useState } from "react";


interface BudgetContextType {
  totalIncome: number;
  totalExpenses: number;
  addTransaction: (amount: number, type: "income" | "expense") => void;
}


const BudgetContext = createContext<BudgetContextType | undefined>(undefined);


interface BudgetProviderProps {
  children: ReactNode; 
}

export const BudgetContextProvider: React.FC<BudgetProviderProps> = ({ children }) => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const addTransaction = (amount: number, type: "income" | "expense") => {
    if (type === "income") {
      setTotalIncome((prevIncome: number) => prevIncome + amount);
    } else {
      setTotalExpenses((prevExpenses: number) => prevExpenses + amount);
    }
  };

  return (
    <BudgetContext.Provider value={{ totalIncome, totalExpenses, addTransaction }}>
      {children} 
    </BudgetContext.Provider>
  );
};


export const useBudgetContext = () => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error("useBudgetContext must be used within a BudgetContextProvider");
  }
  return context;
};


