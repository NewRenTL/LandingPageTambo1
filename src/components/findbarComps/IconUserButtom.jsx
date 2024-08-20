import React from "react";
import { mainContext } from "@src/contexts/MainContext";
import { useContext, useState } from "react";
import IconUploadSVG from "@assets/svg/IconUploadSVG";

const IconUserButtom = ({
  color = "#1C274C",
  hoverColor = "#FF0000",
  fillColor = "none",
  seeCounter = false,
  seePop = false,
}) => {
  const [seeProfile, setSeeProfile] = useState(false);

  const switchSeeProfile = () => {
    setSeeProfile(!seeProfile);
  };

  return (
    <div className="iconButtom w-2/6 p-1 relative bg-transparent flex items-center hover:cursor-pointer">
      <svg
        onClick={switchSeeProfile}
        viewBox="0 0 25 23"
        className="h-9 w-full group transition-all duration-150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="stroke-[#1C274C] group-hover:stroke-red-500"
          cx="12"
          cy="9"
          r="3"
          stroke="#1C274C"
          strokeWidth="1.5"
        />
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
      {/* <span
        className={`${seeCounter ? "hidden" : ""} absolute 
          bottom-0 
          right-[30%]
          px-2 
          rounded-full font-semibold 
          bg-slate-50 h-6 w-6 text-center justify-center flex items-center`}
      >
        {counterCar}
      </span> */}
      <div
        className={`absolute z-10 -bottom-10  ${
          seeProfile == false || seePop == false ? "hidden" : ""
        } left-[41px] rotate-180 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[30px] border-[#B22D8A] mt-2 self-center`}
      ></div>

      <div
        className={`absolute ${
          seeProfile == false || seePop == false ? "hidden" : ""
        } flex flex-col z-20 top-20 -left-[300px] w-[450px] max-h-[400px] bg-[#B22D8A] rounded-xl overflow-y-auto px-5 py-4 border-4 border-[#F7EA22]`}
      >
        <div className="flex flex-col items-center justify-center mb-5 mt-2">
          <IconUploadSVG></IconUploadSVG>
        </div>
        <div className="flex flex-col w-full px-2">
          <div className="w-full flex flex-row justify-between mb-3">
            <div className="w-[48%] flex flex-col">
              <label htmlFor="nameProfile" className="flex mb-2 font-hurme3 text-white">
                Nombre:
              </label>
              <input
                className="px-2 py-2 bg-gray-100 focus:outline-none rounded-lg"
                placeholder="Name"
                id="nameProfile"
              ></input>
            </div>
            <div className="w-[48%] flex flex-col">
              <label htmlFor="lastnameProfile" className="flex mb-2 font-hurme3 text-white">
                Apellido:
              </label>
              <input
                className="px-2 py-2 bg-gray-100 focus:outline-none rounded-lg"
                placeholder="Lastname"
                id="lastnameProfile"
              ></input>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-[100%] flex flex-col">
              <label htmlFor="emailProfile" className="flex mb-2 font-hurme3 text-white">
                Email:
              </label>
              <input
                className="px-2 py-2 bg-gray-100 focus:outline-none rounded-lg"
                placeholder="Email"
                id="emailProfile"
              ></input>
            </div>
          </div>
        </div>
        {/* {items.map((item, index) => (
          <div className="w-full flex flex-col mb-2">
            <p className="text-[#F7EA22] font-hurme3" key={index}>
              {item.name}{" "}
            </p>
            <p className="text-[#F7EA22] font-hurme3">
              {" "}
              Cantidad: {item.amount}
            </p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default IconUserButtom;
