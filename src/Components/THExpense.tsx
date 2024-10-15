interface THExpenseProps {
  amount: number;
  description: string;
  Expense:string
  onDelete: () => void;
}

const THExpense: React.FC<THExpenseProps> = ({ amount, description,Expense, onDelete}) => {
  return (
    <div>
      <div
        className="bg-[#FFFFFF] ml-8 mr-10 mt-4 w-[368px] h-32 rounded-lg 
                 shadow-[hsla(218, 17%, 35%, 0.07)] flex "
      >
        <div>
          <div className="w-12 h-6 pt-4 pl-6">
            <h1 className=" font-Inter font-medium text-base text-[#838383;]">
             {Expense}
            </h1>
          </div>
          <div className="w-[83px] h-6 pt-4 pl-6">
            <h1 className=" font-Inter font-bold text-[32px] leading-6 pt-2">
              ${amount}
            </h1>
          </div>
          <div className="w-[253px] mt-4 pl-6">
            <h1 className="font-Inter pt-4 pb-4 font-normal text-[#4F4F4F] text-[14px] leading-6">
           {description}
            </h1>
          </div>
        </div>
        <div className="h-6 w-[66px] rounded-2xl pl-2 pr-2 mt-4 gap-2.5 bg-[#FFEAEA] mr-2">
          <h1 className="text-[#B05A5A;] font-Inter font-semibold text-[14px] leading-6">
            Expense
          </h1>
        </div>
        <div className="w-5 h-5 mt-4 mr-6 cursor-pointer" onClick={onDelete}>
          <img
            src={`${process.env.PUBLIC_URL}../Images/Orion_bin 1.svg`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default THExpense;





