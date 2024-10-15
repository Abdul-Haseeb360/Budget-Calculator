import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import Tailwind CSS
import App from "./App";
import { BudgetContextProvider } from "./contexts/BudgetContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>

  

   <App/>

   
  </React.StrictMode>
);


