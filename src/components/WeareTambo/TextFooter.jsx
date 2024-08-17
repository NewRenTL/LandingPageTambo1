import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TextFooter = () => {
  const navigate = useNavigate()
  const handleNavigateTo = () => {
    navigate("/aboutUs")
  }
  return (
    <div className="flex flex-col px-2 py-2 bg-transparent w-full md:w-[35%]">
      <div className="flex justify-center md:justify-start py-1 px-2 items-center bg-transparent">
        <h2 onClick={handleNavigateTo} className="text-center font-futuraFont text-2xl text-[#8E3D71] bg-[#F1E726] rounded-2xl px-12 py-[2px] font-bold hover:cursor-pointer hover:scale-105 transition duration-150">
          SOMOS <br />
          TAMBO
        </h2>
      </div>
      <div className="flex justify-center items-center px-4 py-3 my-2 bg-transparent">
        <p className="text-center font-hurme3 text-[#8E3D71] md:text-start font-semibold">
          Es una cadena de minimarket en Perú conocido por su serviciencia y
          ubicaciones estrategicas en diversas zonas urbanas Tambo+ vende una
          amplia gama de productos, desde alimentos y bebidas hasta articulos de
          uso diario, y se ha destacado por su atención rapida y eficiente. La marca ha crecido significativamente en el mercado peruano
        </p>
      </div>
    </div>
  );
};

export default TextFooter;
