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
      <div
        className="bg-[#FFFFFF] lg:ml-8 mr-10 ml-8 mt-4 w-[368px] h-32 rounded-lg 
            shadow-[hsla(218, 17%, 35%, 0.07)] flex ">
        <div>
          <div className="w-auto h-6 pt-4 pl-6 md:pr-20">
            <h1 className="font-Inter font-medium text-base text-[#838383]">
              {Income}
            </h1>
          </div>

          <div className="w-full lg:w-[83px] h-6 pt-4 pl-6">
            <h1 className="font-Inter font-bold text-[32px] leading-6 pt-2">
              ${amount}
            </h1>
          </div>

          <div className="w-full lg:w-auto mt-4 pl-6">
            <h1 className="font-Inter pt-4 pb-4 font-normal text-base lg:text-[14px] w-full lg:w-[233px] leading-6 text-[#4F4F4F]">
              {description}
            </h1>
          </div>
        </div>
        <div className="h-6 rounded-2xl lg:pl-2 md:pl-12 mt-4 bg-[#ECFFEA] lg:mr-[7px]">
          <h1 className="text-[#5AB064;] font-Inter pr-2 font-semibold text-[14px] leading-6">
            Income
          </h1>
        </div>
        <div className="w-5 h-5 mt-4 mr-6 cursor-pointer" onClick={onDelete}>
          <img
            src={`${process.env.PUBLIC_URL}../Images/Orion_bin 1.svg`}
            alt="Delet Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default THIncome;
