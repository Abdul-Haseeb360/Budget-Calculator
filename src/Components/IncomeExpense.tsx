

interface IncomeExpenseSummaryProps {
  totalIncome: number;
  totalExpense: number;
}

const IncomeExpense: React.FC<IncomeExpenseSummaryProps> = ({ totalIncome, totalExpense }) => {


return(
 <div>
  <div className="flex w-full">

  
    <div className="bg-[#D9E7E5] w-[628px] h-[139px] rounded-lg mr-6  flex">
          <div className="">
            <img src={`${process.env.PUBLIC_URL}../Images/Bank.png`} className="pt-6 pl-10 pb-2.5" />
            <h2 className="font-Inter font-bold text-base w-[86px] h-[24px] pl-10 pb-4 ">
            ${totalIncome.toFixed(2)}
            </h2>
            <p className="pl-10 font-normal  text-[#686868;]">Income </p>
          </div>
        </div>

        <div className="bg-[#E6E2E6;] w-[628px] h-[139px] rounded-lg">
          <div className="">
            <img  src={`${process.env.PUBLIC_URL}../Images/Wallet.png`}className="pt-6 pl-10 pb-2.5" />
            <h2 className="font-Inter font-bold text-base w-[86px] h-[24px] pl-10 pb-4">
            ${totalExpense.toFixed(2)}
            </h2>
            <p className="pl-10 font-normal text-[#686868;]">Expense </p>
          </div>
        </div>
      </div>
  </div>
)

}

export default IncomeExpense
