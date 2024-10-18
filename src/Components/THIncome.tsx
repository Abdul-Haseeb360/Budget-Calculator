import React from "react";

interface THIncomeProps {
  amount: number;
  description: string;
  Income: string;
  onDelete: () => void;
}

const THIncome: React.FC<THIncomeProps> = ({
  amount,
  description,
  Income,
  onDelete,
}) => {
  return (
    <div>
      <div className="bg-[#FFFFFF] lg:mx-10 mr-4 ml-8 mt-4 lg:w-[368px] w-[328px] h-auto rounded-lg shadow-[hsla(218, 17%, 35%, 0.07)] flex justify-between p-4">
        <div className="flex-1 lg:ml-6 ml-[-80px]">
          <div className="w-auto h-6 justify-between">
            <h1 className="font-Inter font-medium text-base text-[#838383] pb-20">
              {Income}
            </h1>
          </div>

          <div className="w-full lg:w-[83px] h-6 mb-4 ml-[-10px]">
            <h1 className="font-Inter font-bold text-[32px] md:text-4xl leading-6">
              ${amount}
            </h1>
          </div>

          <div className="w-full lg:w-auto mt-4 ">
            <h1 className="font-Inter font-normal text-sm md:text-base lg:text-[14px] w-full leading-6 text-[#4F4F4F]">
              {description}
            </h1>
          </div>
        </div>

        <div className="h-6 rounded-2xl bg-[#ECFFEA] lg:mr-[7px] flex items-center  px-2">
          <h1 className="text-[#5AB064] font-Inter font-semibold text-[14px] md:text-[14px]">
            Income
          </h1>
        </div>

        <div className="w-5 h-5 ml-2 cursor-pointer" onClick={onDelete}>
          <img
            src={`${process.env.PUBLIC_URL}../Images/Orion_bin 1.svg`}
            alt="Delete Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default THIncome;
