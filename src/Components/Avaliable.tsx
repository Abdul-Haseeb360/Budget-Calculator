  import React,{useState} from "react";


  interface AvailableProps {
    availableBalance: number;
  }
  const Avaliable: React.FC<AvailableProps> = ({ availableBalance }) => {


    return(
      <div>
        <div className=" bg-[#455A64] md:w-[428px] lg:w-[auto]  h-[139px] rounded-lg   mt-10 mb-6 py-1 ">
          <div className="h-3/4 w-56">
            <h2 className=" font-medium font-Inter text-white text-sm leading-5 left-10 pt-9 pl-9 text-[#FFFFFFB2;] ">
            Avaliable Balance
            </h2>
            <h1 className=" font-Inter text-xl text-white px-9 py-0 h-0 pt-2.5 font-semibold">
            ${availableBalance.toFixed(2)}
            </h1>
          </div>
        </div>
      </div>
    )
  }

  export default Avaliable;

