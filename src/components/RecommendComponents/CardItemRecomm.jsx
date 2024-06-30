import React from "react";

const CardItemRecomm = ({ price = "", name = "", img = "" }) => {
  return (
    <article 
    className="flex flex-col relative justify-center 
    w-[200px] items-center bg-white mx-auto py-6 rounded-xl">
    <img className="w-24 h-24" src={img} alt=""/>

    <div className="w-full text-center py-2 px-4 mt-1">
        <h2 className="font-bold text-[#9E318A]">{name}</h2>
        <h2 className="font-bold">S/{price}</h2>
    </div>

    </article>
  );
};

export default CardItemRecomm;
