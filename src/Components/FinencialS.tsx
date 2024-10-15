import React from "react";
import PieChart from "./Chart";

// Define the Transaction interface
interface Transaction {
  type: "income" | "expense";
  amount: number;
  description: string;
  category: string;
  id: number;
}

// Define the Props interface for the FinancialS component
interface FinencialSProps {
  transactions: Transaction[];
  transactionType: "income" | "expense";
}

export function FinencialS({ transactions, transactionType }: FinencialSProps) {
  return (
    <div>
      <div className="lg:w-[400px] w-full h-[623px] bg-[#F9F9F9] mt-6 rounded-lg hidden sm:block">
        <div className="pt-10 pl-10">
          <h2 className="font-Inter font-semibold text-[27px] leading-[42px] ">
            Financial Summary
          </h2>
        </div>
        <div className="pt-[17px] pl-1">
          <h2 className="font-Inter font-bold text-base ml-10">
            {transactionType === "income" ? "Income" : "Expense"}
          </h2>
          
          <PieChart transactions={transactions} savings={0} />
          
          {/* Adjust savings as needed */}
        </div>
      </div>
    </div>
  );
}

export default FinencialS;
