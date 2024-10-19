// import React from "react";
// import { Chart } from "react-google-charts";
// // import { Doughnut } from "react-chartjs-2";
// // import { Chart, ArcElement, Tooltip, Legend } from "chart.js";





// // Define the PieChart component
// export default function PieChart(props: {
//   transactions: {
//     amount: number;
//     type: "income" | "expense";
//     category: string;
//   }[];
//   savings: number;
// }) {

//   const incomeCategories = new Map<string, number>();
//   const expenseCategories = new Map<string, number>();

//   props.transactions.forEach((transaction) => {
//     if (transaction.type === "income") {
//       incomeCategories.set(
//         transaction.category,
//         (incomeCategories.get(transaction.category) || 0) + transaction.amount
//       );
//     } else if (transaction.type === "expense") {
//       expenseCategories.set(
//         transaction.category,
//         (expenseCategories.get(transaction.category) || 0) + transaction.amount
//       );
//     }
//   });


//   const incomeData: (string | number)[][] = [["Category", "Income"],];
//   incomeCategories.forEach((amount, category) => {
//     incomeData.push([category, amount]);
//   });


//   const expenseData: (string | number)[][] = [["Category", "Expense"]];
//   expenseCategories.forEach((amount, category) => {
//     expenseData.push([category, amount]);
//   });


//   const options = {
//     pieHole: 0.6,
//     is3D: false,
//     slices: {
//       0: { color: "#04BFDA" },
//       1: { color: "#9B88ED" },
//       2: { color: "#FB67CA" },
//       3: { color: "#FFA84A" },
//     },
//   };

//   return (
//     <div>
//         <h2 className="font-Inter font-bold text-base ml-10">Income</h2>




      

//  <Chart
//   chartType="PieChart"
//   data={incomeData}
//   options={{
//     ...options,
//     backgroundColor: "transparent",
//     sliceVisibilityThreshold: 0, 
//     pieSliceText: "percentage", 
//     pieSliceTextStyle: {
//       fontSize: 8, 
//       color: "#fff", 
//     },
//     legend: {
//       position: "rigt", 
//       textStyle: {
//         fontSize: 11,
//         color: "#333",
//       },
//     },
//     colors: ["#00bcd4", "#ff9800", "#e91e63", "#9c27b0"], 

  
//   }}
//   width={"100%"}
//   height={"250px"}
// /> 

//       {/* Expense Pie Chart */}
//     <h2 className="font-Inter font-bold text-base ml-10">Expense</h2>
//       <Chart
//         chartType="PieChart"
//         data={expenseData}
//         options={{ ...options, backgroundColor: "transparent",
//           pieSliceTextStyle: {  
//           fontSize: 8, 
//         }}}
//         width={"400px "}
//         height={"250px"}
//       />
//     </div>
//   );
// }


import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart(props: {
  transactions: {
    amount: number;
    type: "income" | "expense";
    category: string;
  }[];
  savings: number;
}) {
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

  const incomeData = {
    labels: Array.from(incomeCategories.keys()),
    datasets: [
      {
        label: "Income",
        data: Array.from(incomeCategories.values()),
        backgroundColor: ["#04BFDA", "#9B88ED", "#FB67CA", "#FFA84A"],
        hoverBackgroundColor:["#04BFDA", "#9B88ED", "#FB67CA", "#FFA84A"],
        borderWidth: 0,
      },
    ],
  };

  const expenseData = {
    labels: Array.from(expenseCategories.keys()),
    datasets: [
      {
        label: "Expense",
        data: Array.from(expenseCategories.values()),
        backgroundColor: ["#04BFDA", "#9B88ED", "#FB67CA", "#FFA84A"],
        hoverBackgroundColor: ["#04BFDA", "#9B88ED", "#FB67CA", "#FFA84A"],
        borderWidth: 0,
      },
    ],
  };

  // Define the options for the Doughnut chart
  const options: ChartOptions<"doughnut"> = {
    cutout: "70%", // Doughnut chart
    animation: {
      animateRotate: true, // Rotate animation
      animateScale: true,  // Scale animation
      duration: 1000,      
    },
    plugins: {
      legend: {
        position: "right",
        labels: {
          font: {
            size: 10,
          },
          color: "#333",
        },
      },
    },
  };

  return (
    <div>
      
      <h2 className="font-Inter font-bold text-base ml-10">Income</h2>
      <div className=" flex justify-center my-0" style={{ width: "400px", height: "250px", }}>
        <Doughnut data={incomeData} options={options}/>
      </div>

      
      <h2 className="font-Inter font-bold text-base ml-10">Expense</h2>
      <div className="w-full flex justify-center" style={{ width: "400px", height: "250px" }}>
        <Doughnut data={expenseData} options={options}  />
      </div>
    </div>
  );
}

