import React from "react";
import CarouselAntojos from "@src/components/AntojosComponent/CarouselAntojos";

const AntojosWeek = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="carousel-container md:hidden rounded-lg block relative my-2 mx-1 py-5 w-[90%] bg-slate-400">
        <CarouselAntojos />
      </div>
      <div className="container-articles hidden rounded-lg md:flex w-[90%] my-2 px-1 py-5 bg-slate-600">

      </div>
    </div>
  );
};

export default AntojosWeek;
