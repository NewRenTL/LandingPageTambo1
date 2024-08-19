import React, { useContext } from "react";
import { mainContext } from "@src/contexts/MainContext";

function IconButtom({
  viewBox = "",
  enaBack = "",
  dpath = "",
  seeCounter = false,
}) {
  const { counterCar } = useContext(mainContext);

  return (
    <div className="iconButtom w-2/6 p-1 bg-transparent relative flex items-center">
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
        className={`${
          seeCounter ? "hidden" : ""
        } absolute 
          bottom-0 
          right-[30%]
          px-2 
          rounded-full font-semibold 
          bg-slate-50 h-6 w-6 text-center justify-center flex items-center`}
      >
        {counterCar}
      </span>
    </div>
  );
}

export default IconButtom;
