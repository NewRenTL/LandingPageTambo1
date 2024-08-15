import React from "react";

const ContainerFutterWhatis = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center">
      <div className="w-full flex flex-col md:w-4/12 h-[300px] justify-center items-center p-8">
        <div className="flex text-center mb-4">
          <h2 className="font-bold uppercase text-xl">Envianos tu correo</h2>
        </div>
        <p className="flex justify-center items-center text-center text-sm my-5">
          Envianos tu correo! Asi pondremos mantenerte actualizado de
          información relevante, promociones, newsletters, actualizaciones de
          productos
        </p>
        <div className="w-full py-2 my-2">
          <input
            className="px-3 py-2 focus:outline-none border w-full"
            placeholder="correo@gmail.com"
          ></input>
        </div>
        <div className="w-full flex flex-col  justify-center items-center">
          <button className="px-5 py-1 uppercase bg-[#B22B89] text-[#F5EF27] font-bold rounded-lg">
            ENVIAR
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col md:w-4/12 h-[300px] justify-start items-center p-8">
        <div className="flex items-center mb-4">
          <h2 className="font-bold uppercase text-xl">Terminos</h2>
        </div>
        <h3 className="my-2 font-semibold underline underline-offset-1 decoration-stone-500 ">Legales</h3>
        <h3 className="my-2 font-semibold underline underline-offset-1 decoration-stone-500 ">Términos y Condiciones de Uso</h3>
        <h3 className="my-2 font-semibold underline underline-offset-1 decoration-stone-500 ">Política de Privacidad</h3>
        <h3 className="my-2 font-semibold underline underline-offset-1 decoration-stone-500 ">Política de Cookies</h3>
      </div>
      <div className="w-full flex flex-col md:w-4/12 h-[300px] items-start p-8 text-center">
        <div className="text-center mb-4 w-full">
          <h2 className="font-bold uppercase text-xl">Reclamaciones</h2>
        </div>
        <h3 className="my-2 font-semibold w-full">contacto@tambo.com</h3>
      </div>
    </div>
  );
};

export default ContainerFutterWhatis;
