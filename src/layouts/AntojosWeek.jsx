import React from "react";
import CarouselAntojos from "@src/components/AntojosComponents/CarouselAntojos";
import ContainerAntojos from "@components/AntojosComponents/ContainerAntojos";
import TitleBarAntojos from "@components/AntojosComponents/TitleBarAntojos";
import myAntojos from "@src/data/dataAntojos";

const AntojosWeek = ({ nameSection = "TopSection" }) => {
  return (
    <div className="flex flex-col my-3 justify-center items-center w-full">
      <TitleBarAntojos title={nameSection} />
      <div className="carousel-container md:hidden rounded-lg block relative my-2 mx-1 py-5 w-[90%] bg-transparent">
        <CarouselAntojos data={myAntojos} />
      </div>
      <div className="container-articles hidden rounded-lg md:flex w-[90%] my-2 px-5 py-5 bg-transparent">
        <ContainerAntojos data={myAntojos} />
      </div>
    </div>
  );
};

export default AntojosWeek;
