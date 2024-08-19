import React from "react";

const CardItems = ({
  price = -1,
  name = "",
  img = "",
  nextSlide = () => {},
  prevSlide = () => {},
}) => {
  return (
    <article className=" flex flex-col relative justify-center w-[200px] items-center bg-[#FFFFFF] mx-auto py-6 rounded-xl hover:cursor-pointer transition-all duration-200 hover:scale-110">
      <button
        className="absolute font-hurme3 -left-7 md:hidden top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-amber-300 hover:transition-colors hover:duration-200"
        onClick={prevSlide}
      >
        Prev
      </button>
      <img className="w-24 h-24" src={img} alt="" />
      <div className="w-full text-center py-2 px-4 mt-1">
        <h2 className="font-hurme3 text-[#8A3C82]">{name}</h2>
        <h2 className="font-hurme3 font-bold">S/{price.toFixed(2)}</h2>
      </div>
      <button
        className="absolute font-hurme3 -right-7  md:hidden top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-amber-300 hover:transition-colors hover:duration-200"
        onClick={nextSlide}
      >
        Next
      </button>
    </article>
  );
};

export default CardItems;
