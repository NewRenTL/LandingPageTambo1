import React from "react";

const TextFooter = () => {
  return (
    <div className="flex flex-col px-2 py-2 bg-slate-700 w-full md:w-[35%]">
      <div className="flex justify-center md:justify-start py-1 px-2 items-center bg-slate-400">
        <h2 className="text-center text-[#8E3D71] bg-[#F1E726] rounded-2xl px-10 py-[2px] font-bold">
          Somos <br />
          Tambo
        </h2>
      </div>
      <div className="flex justify-center items-center px-4 py-3 my-2 bg-red-900">
        <p className="text-center text-[#8E3D71] md:text-start font-semibold">
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
