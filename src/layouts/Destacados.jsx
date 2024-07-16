import React from "react";
import ContainerSnacks from "@src/components/DestacComponents/ContainerSnacks";
const Destacados = () => {
  return (
    <div className="flex flex-col px-0 mt-1 w-full bg-transparent">
      <div className="titleSection flex w-full justify-start text-center md:text-start pt-5 pb-4 pr-3 pl-3 text-lg">
        <h2 className="font-bold text-base md:text-xl px-2 md:pl-4 font-fspdemo text-[#B32C8A]">CATEGORIA DESTACADOS DE ESTA SEMANA</h2>
      </div>
      <ContainerSnacks />
    </div>
  );
};

export default Destacados;
