import React from "react";
import ContainerSnacks from "@src/components/DestacComponents/ContainerSnacks";
const Destacados = () => {
  return (
    <div className="flex flex-col px-0 mt-1 w-full bg-amber-300">
      <div className="titleSection flex w-full justify-start pt-5 pb-4 pr-3 pl-3 text-lg">
        <h2 className="font-bold text-[#B32C8A]">Categoria Destacados de esta semana</h2>
      </div>
      <ContainerSnacks />
    </div>
  );
};

export default Destacados;
