import React, { useContext, useState } from "react";
import { mainContext } from "@src/contexts/MainContext";

function IconButtom({
  viewBox = "",
  enaBack = "",
  dpath = "",
  seeCounter = false,
  seePop = false,
}) {
  const { counterCar, items } = useContext(mainContext);

  const [seePopAmount, setSeePopAmount] = useState(false);

  const showPopAmount = () => {
    setSeePopAmount(!seePopAmount);
  };

  return (
    <div
      onClick={showPopAmount}
      className="iconButtom w-2/6 p-1 bg-transparent relative flex items-center hover:cursor-pointer"
    >
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`${viewBox}`}
        enableBackground={`${enaBack}`}
        className="h-6 w-full hover:fill-blue-500 transition-colors duration-150"
      >
        <g>
          <path d={`${dpath}`} />
        </g>
      </svg>
      <span
        className={`${seeCounter ? "hidden" : ""} absolute 
          bottom-0 
          right-[30%]
          px-2 
          rounded-full font-semibold 
          bg-slate-50 h-6 w-6 text-center justify-center flex items-center`}
      >
        {counterCar}
      </span>
      <div className={`absolute z-10 -bottom-10  ${
          !seePopAmount ? "hidden" : ""
        } left-[50px] rotate-180 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[30px] border-[#F7EA22] mt-2 self-center`}></div>

      <div
        className={`absolute ${
          !seePopAmount ? "hidden" : ""
        } flex flex-col z-20 top-20 w-[250px] max-h-[400px] bg-[#B22D8A] rounded-xl overflow-y-auto px-5 py-4 border-4 border-[#F7EA22]`}
      >
        <p className="text-[#F7EA22] font-hurme3 mb-2 text-xl">Lista:</p>
        {items.map((item, index) => (
          <div className="w-full flex flex-col mb-2">
            <p className="text-[#F7EA22] font-hurme3" key={index}>
              {item.name}{" "}
            </p>
            <p className="text-[#F7EA22] font-hurme3">
              {" "}
              Cantidad: {item.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconButtom;
