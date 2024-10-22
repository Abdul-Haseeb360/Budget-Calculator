interface IncomeExpenseSummaryProps {
  totalIncome: number | string | undefined;
  totalExpense: number | string | undefined;
}

const IncomeExpense: React.FC<IncomeExpenseSummaryProps> = ({
  totalIncome,
  totalExpense,
}) => {
  const income = isNaN(Number(totalIncome)) ? 0 : Number(totalIncome);
  const expense = isNaN(Number(totalExpense)) ? 0 : Number(totalExpense);

  return (
    <div>
      <div className="flex flex-1 font-body">
        <div className="bg-[#D9E7E5] h-[139px] rounded-lg mr-6 flex-1 flex">
          <div className="">
            <img
              src={`${process.env.PUBLIC_URL}../Images/Bank.png`}
              className="pt-6 pl-10 pb-2.5"
            />
            <h2 className="font-Inter font-bold text-base w-[86px] h-[24px] pl-10 pb-4 ">
              ${income.toFixed(2)}
            </h2>
            <p className="pl-10 font-normal  text-[#686868;]">Income </p>
          </div>
        </div>

        <div className="bg-[#E6E2E6;]  h-[139px] flex-1 rounded-lg">
          <div className="">
            <img
              src={`${process.env.PUBLIC_URL}../Images/Wallet.png`}
              className="pt-6 pl-10 pb-2.5"
            />
            <h2 className="font-Inter font-bold text-base w-[86px] h-[24px] pl-10 pb-4">
              ${expense.toFixed(2)}
            </h2>
            <p className="pl-10 font-normal text-[#686868;]">Expense </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
