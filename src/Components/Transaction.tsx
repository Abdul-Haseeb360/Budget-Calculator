import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import THIncome from "./THIncome";
import THExpense from "./THExpense";
import FinencialS from "./FinencialSummary";
import PieChart from "./Chart";
import { useForm } from "react-hook-form";

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-xl z-10">
        {children}

        <button
          className="bg-red-500 text-white px-4 py-2 rounded absolute top-4 right-2"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

interface Transactions {
  type: "income" | "expense";
  amount: number;
  description: string;
  category: string;
  id: number;
}

interface TransactionProps {
  transactions: Transactions[];
  setTransactions: Dispatch<SetStateAction<Transactions[]>>;
  transactionType: "income" | "expense";
  setTransactionType: Dispatch<SetStateAction<"income" | "expense">>;
}

interface FormInputs {
  category: string;
  amount: number;
  description: string;
}
const Transaction: React.FC<TransactionProps> = ({
  transactions,
  setTransactions,
  transactionType,
  setTransactionType,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const incomeCategories = ["Salary", "Rental Income", "Business", "Stocks"];
  const expenseCategories = ["Shopping", "Food", "Entertainment", "Grocery"];

  const [amount, setAmount] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [isTransactionModalOpen, setTransactionModalOpen] = useState(false);
  const [isSummaryModalOpen, setSummaryModalOpen] = useState(false);

  const onSubmit = (data: FormInputs) => {
    const id = transactions.length
      ? transactions[transactions.length - 1].id + 1
      : 1;

    setTransactions([
      ...transactions,
      {
        id,
        type: transactionType,
        amount: parseFloat(data.amount.toString()),
        description: data.description,
        category: data.category,
      },
    ]);

    reset();
    setAmount("");
    setDescription("");
  };

  const deleteTransaction = (id: number) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const handleTransactionTypeChange = (type: "income" | "expense") => {
    setTransactionType(type);
    setAmount("");
    setDescription("");
    reset();
  };

  return (
    <div className="flex  md:justify-center lg:justify-between font-body">

      <div className="flex flex-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="h-[623px] mt-6 mr-10 ">
            <div className="leading-[42px]  h-[42px] mb-10">
              <h1 className="font-Inter font-semibold text-[27px] leading-[42px]">
                Add Transaction
              </h1>
            </div>

            <div className="mb-4">
              <label className="block font-Inter font-normal text-base text-[#030303] mb-2">
                Select Type
              </label>
              <div className="flex space-x-2">
                <button
                  className={`md:w-[152px]  h-[81px] py-2 font-bold text-base rounded-lg border ${
                    transactionType === "income"
                      ? "bg-[#D9E7E5] border-[#42887C]"
                      : "bg-[#D9E7E5] border-transparent"
                  }`}
                  onClick={() => handleTransactionTypeChange("income")}
                >
                  Income
                </button>
                <button
                  className={`md:w-[152px] w-[50%] h-[81px] font-Inter font-normal text-base text-[#767676;] py-2 rounded-md border ${
                    transactionType === "expense"
                      ? "bg-[#EBEBEB] border-[#42887C]"
                      : "bg-[#EBEBEB] border-transparent"
                  }`}
                  onClick={() => handleTransactionTypeChange("expense")}
                >
                  Expense
                </button>
              </div>
            </div>

            <div className="w-[71px] h-6">
              <h1 className="font-normal font-Inter text-base mt-2">
                Category
              </h1>
            </div>
            <div className="mt-2 rounded-[rgba(208, 213, 221, 1)] shadow-[rgba(16, 24, 40, 0.05)]">
              <select
                id="category"
                {...register("category", { required: "Category is required" })}
                className="pt-2.5 pb-2.5 pl-3.5 pr-3.5 rounded-lg w-full lg:w-80 h-11 gap-2 font-normal font-Inter text-base border-2"
              >
                <option>Select Category</option>
                {transactionType === "income"
                  ? incomeCategories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))
                  : expenseCategories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
              </select>
              {errors.category && <p>{errors.category.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block font-Inter font-normal text-base mt-4 mb-2">
                Amount
              </label>
              <input
                id="amount"
                type="number"
                placeholder="$$$"
                value={amount}
                step="0.01"
                {...register("amount", {
                  required: "Amount is required",
                  min: { value: 1, message: "Amount must be greater than 0" },
                })}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-500"
              />
              {errors.amount && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.amount.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-Inter font-normal text-base mt-4 mb-2">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Enter a description..."
                value={description}
                {...register("description", {
                  required: "Description is required",
                  maxLength: { value: 200, message: "Description too long" },
                })}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 rows=4 h-[128px]"
              >
                {errors.description && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.description.message}
                  </p>
                )}
              </textarea>
            </div>

            <div className="bg-[#FFC727] text-center w-full lg:w-80 h-11 mt-6 rounded-lg">
              <button
                className="pt-2.5 pb-3.5 pl-24 pr-24 font-semibold text-[#FFFFFF]"
                type="submit"
              >
                Add Transaction
              </button>
            </div>
          </div>
        </form>

        {/* Transaction History */}
        <div className=" flex-1  ">
          <div className="bg-white lg:bg-[#F9F9F9] mt-6 mb-10 mr-6  h-[623px] overflow-y-auto rounded-lg ">
            <div className=" h-[42px] mt-10 ml-10">
              <h1 className="font-body font-semibold text-[27px] leading-[42px]">
                Transaction History
              </h1>
            </div>

            {transactions.map((t, index) =>
              t.type === "income" ? (
                <THIncome
                  key={index}
                  amount={t.amount}
                  description={t.description}
                  Income={t.category}
                  onDelete={() => deleteTransaction(t.id)}
                />
              ) : (
                <THExpense
                  key={index}
                  amount={t.amount}
                  description={t.description}
                  Expense={t.category}
                  onDelete={() => deleteTransaction(t.id)}
                />
              )
            )}
          </div>
        </div>
      </div>

      <FinencialS
        transactions={transactions}
        transactionType={transactionType}
      />
      {/* Transaction Modal */}
      <div className="bg-black">
        <Modal
          isOpen={isTransactionModalOpen}
          onClose={() => setTransactionModalOpen(false)}
        >
          <div className="h-auto w-auto ">
            <h1 className="font-Inter font-semibold">Add Transaction</h1>
            <div className="mt-4">
              <label className="block text-base font-Inter">Select Type</label>
              <div className="flex space-x-2 mt-2">
                <button
                  className={`w-[50%] py-2 rounded-lg border ${
                    transactionType === "income"
                      ? "bg-[#D9E7E5] border-[#42887C]"
                      : "bg-[#D9E7E5] border-transparent"
                  }`}
                  onClick={() => handleTransactionTypeChange("income")}
                >
                  Income
                </button>
                <button
                  className={`w-[50%] py-2 rounded-lg border ${
                    transactionType === "expense"
                      ? "bg-[#EBEBEB] border-[#42887C]"
                      : "bg-[#EBEBEB] border-transparent"
                  }`}
                  onClick={() => handleTransactionTypeChange("expense")}
                >
                  Expense
                </button>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-base font-Inter">Category</label>
              <select
                id="category"
                className="mt-2 w-full py-2 rounded-lg border-2"
              >
                <option>Select Category</option>
                {transactionType === "income"
                  ? incomeCategories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))
                  : expenseCategories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
              </select>
            </div>

            <div className="mt-4">
              <label className="block text-base font-Inter">Amount</label>
              <input
                type="text"
                placeholder="$$$"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-500"
              />
            </div>

            <div className="mt-4">
              <label className="block text-base font-Inter">Description</label>
              <textarea
                id="description"
                placeholder="Enter a description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              ></textarea>
            </div>

            <div className="bg-[#FFC727] text-center w-full h-11 mt-6 rounded-lg">
              <button
                className="pt-2.5 pb-3.5 pl-24 pr-24 font-semibold text-white"
                type="submit"
              >
                Add Transaction
              </button>
            </div>
          </div>
        </Modal>
      </div>

      <Modal
        isOpen={isSummaryModalOpen}
        onClose={() => setSummaryModalOpen(false)}
      >
        <PieChart transactions={transactions} savings={0} />
      </Modal>
    </div>
  );
};

export default Transaction;
