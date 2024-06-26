import React from "react";
import CarouselAntojos from "@src/components/AntojosComponent/CarouselAntojos";

const AntojosWeek = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="carousel-container rounded-lg block relative my-2 mx-1 py-5 w-[90%] bg-slate-400">
        <CarouselAntojos />
      </div>
    </div>
  );
};

export default AntojosWeek;
