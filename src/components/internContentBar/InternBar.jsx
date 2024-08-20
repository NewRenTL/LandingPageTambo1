import React from "react";
import { mainContext } from "@src/contexts/MainContext";
import { useContext } from "react";
const InternBar = () => {

  const { setSectionEstablished } = useContext(mainContext);

  const titleList = [
    "Cervezas",
    "Pack Licores",
    "Comidas",
    "Listo para tomar",
    "Aguas y gaseosas",
    "Cigarros y vapes",
    "Confiteria",
    "Cuidado Personal",
  ];

  const handleSectionClick = (title) => {
    setSectionEstablished(title); // Cambia el estado al hacer clic
  };


  return (
    <aside className="flex flex-col w-1/5 bg-blue-400 mr-2">
      <header className="px-3 py-1 mx-1 my-1 min bg-[#B22D8A] flex min-h-16 justify-center items-center flex-wrap text-wrap">
        <h2 className="text-wrap text-center font-bold font-fspdemo text-[0.70rem] md:text-xl lg:text-2xl xl:text-3xl bg-transparent-50 mx-1 text-[#F5E844]">CATEGORIAS</h2>
      </header>
      <ul className="list-none flex flex-col flex-grow justify-center flex-wrap px-1 ">
        {titleList.map((title, index) => (
          <li
            key={index}
            className="flex px-1 py-4 w-full justify-start items-center mb-1 hover:bg-yellow-100 flex-grow bg-[#B22D8A]"
            onClick={()=> handleSectionClick(title)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 512 243.58"
              className="w-10 h-10 fill-slate-50 mr-5 ml-4 hidden md:flex" 
            >
              <path
                fillRule="nonzero"
                d="M373.57 0 512 120.75 371.53 243.58l-20.92-23.91 94.93-83L0 137.09v-31.75l445.55-.41-92.89-81.02z"
              />  
            </svg>
            <h2 className="font-hurme3 sm:text-sm md:text-base lg:text-xl  text-[#F5E844]">{title}</h2>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default InternBar;
