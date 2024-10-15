import React from "react";
import { Chart } from "react-google-charts";

// Define the PieChart component
export default function PieChart(props: {
  transactions: {
    amount: number;
    type: "income" | "expense";
    category: string;
  }[];
  savings: number;
}) {
  // Calculate total income and expenses
  const incomeCategories = new Map<string, number>();
  const expenseCategories = new Map<string, number>();

  props.transactions.forEach((transaction) => {
    if (transaction.type === "income") {
      incomeCategories.set(
        transaction.category,
        (incomeCategories.get(transaction.category) || 0) + transaction.amount
      );
    } else if (transaction.type === "expense") {
      expenseCategories.set(
        transaction.category,
        (expenseCategories.get(transaction.category) || 0) + transaction.amount
      );
    }
  });

  // Prepare data for the income pie chart
  const incomeData: (string | number)[][] = [["Category", "Income"]];
  incomeCategories.forEach((amount, category) => {
    incomeData.push([category, amount]);
  });

  // Prepare data for the expense pie chart
  const expenseData: (string | number)[][] = [["Category", "Expense"]];
  expenseCategories.forEach((amount, category) => {
    expenseData.push([category, amount]);
  });

  // Debugging: Log the prepared data
  console.log("Income Data:", incomeData);
  console.log("Expense Data:", expenseData);

  // Define options for the pie charts
  const options = {
    pieHole: 0.6,
    is3D: false,
    slices: {
      0: { color: "#04BFDA" },
      1: { color: "#9B88ED" },
      2: { color: "#FB67CA" },
      3: { color: "#FFA84A" },
    },
  };

  return (
    <div>
      {/* Income Pie Chart */}
    
      <Chart
        chartType="PieChart"
        data={incomeData}
        options={{ ...options, backgroundColor: "transparent", pieSliceTextStyle: {
          fontSize: 8, 
        } }}
        width={"450px"}
        height={"250px"}
      />

      {/* Expense Pie Chart */}
    <h2 className="font-Inter font-bold text-base ml-10">Expense</h2>
      <Chart
        chartType="PieChart"
        data={expenseData}
        options={{ ...options, backgroundColor: "transparent", pieSliceTextStyle: {
          fontSize: 8, 
        } }}
        width={"450px"}
        height={"250px"}
      />
    </div>
  );
}
