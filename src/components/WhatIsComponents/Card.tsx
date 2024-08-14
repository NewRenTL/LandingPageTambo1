import React from "react";

interface CardProps {
  svgComponent: React.FC;
  Title: string;
  SubContent: string;
}

const Card: React.FC<CardProps> = ({ svgComponent: SvgComponent, Title, SubContent }) => {
  return (
    <div className="card-container mb-5 mt-2 sm:mb-0 flex flex-col  w-full h-42 justify-center items-center px-2 py-2">
      <div className="svg-container items-center flex w-[60%] lg:w-[300px] h-[300px] px-2 py-2">
        <SvgComponent /> 
      </div>
      <h2 className="text-center flex my-6 py-2">{Title}</h2>
      <p className="text-center h-full px-5 lg:px-20 flex items-center font-semibold text-[16px]">{SubContent}</p>
    </div>
  );
};

export default Card;