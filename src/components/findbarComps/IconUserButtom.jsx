import React from "react";

const IconUserButtom = ({ color = "#1C274C", hoverColor = "#FF0000", fillColor = "none"}) => {
  return (
    <div className="iconButtom w-16 p-1 ml-5 bg-transparent flex items-center">
      <svg viewBox="0 0 25 23" className="h-9 w-full group transition-all duration-150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className="stroke-[#1C274C] group-hover:stroke-red-500" cx="12" cy="9" r="3" stroke="#1C274C" strokeWidth="1.5"/>
        <path
          d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="stroke-[#1C274C] group-hover:stroke-red-500"
        />
        <path
          d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="stroke-[#1C274C] group-hover:stroke-red-500 transition-colors"  
        />
      </svg>

    </div>
  );
};

export default IconUserButtom;
