import React from "react";

function IconButtom({viewBox = "",enaBack ="",dpath=""}) {
  return (
    <div className="iconButtom w-2/6 p-1 bg-transparent flex items-center">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`${viewBox}`}
        enableBackground={`${enaBack}`}
        className="h-6 w-full hover:fill-blue-500 transition-colors duration-150"
      >
        <g>
          <path
            d={`${dpath}`}
          />
        </g>
      </svg>
    </div>
  );
}

export default IconButtom;
