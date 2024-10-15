// src/types.ts

export interface BudgetContextType {
  income: number;
  expenses: number;
  addTransaction: (amount: number, type: string) => void;
}
