import React from "react";
import PieChart from "./Chart";

interface Transaction {
  type: "income" | "expense";
  amount: number;
  description: string;
  category: string;
  id: number;
}

interface FinencialSummaryProps {
  transactions: Transaction[];
  transactionType: "income" | "expense";
}

export function FinencialSummary({ transactions, transactionType }: FinencialSummaryProps) {
  return (
    <div>
      <div className="h-[623px] bg-[#F9F9F9] mt-6 rounded-lg sm:block">
        <div className="pt-10 pl-10">
          <h2 className="font-Inter font-semibold text-[27px] leading-[42px] ">
            Financial Summary
          </h2>
        </div>
        <div className="pt-[17px] pl-1">
          <PieChart transactions={transactions} savings={0} />
        </div>
      </div>
    </div>
  );
}

export default FinencialSummary;
