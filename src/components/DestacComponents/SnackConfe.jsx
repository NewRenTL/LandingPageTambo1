import React from "react";
import lays from "@assets/img/lays.png";
const SnackConfe = ({ name, bgcolor = "bg-red-300", img = lays, textColor = '' }) => {
  return (
    <div className={`${bgcolor} flex flex-grow items-center justify-center py-5`}>
      <img src={lays} className="h-20 bg-transparent" alt="" />
      <h2 className={`font-bold ml-5 text-4xl ${textColor}`}>{name}</h2>
    </div>
  );
};

export default SnackConfe;
