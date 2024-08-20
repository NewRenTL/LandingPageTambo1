import React from "react";
import { useNavigate } from "react-router-dom";
const ContainerFutterWhatis = () => {
  const navigate = useNavigate()
  const handleNavigateToLegal = () => {
    navigate("/legalTerms")
  }
  const handleNavigateToEcomerceTerms = () => {
    navigate("/ecomerceTerms")
  }
  const handleNavigateToCookiesTerms = () => {
    navigate("/cookiesTerms")
  }

  const handleNavigateComplains = () => {
    navigate("/complaintForm")
  }

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center my-2">
      <div className="w-full flex flex-col md:w-4/12 h-[300px] justify-center items-center px-5  border-r-2 border-black">
        <div className="flex text-center mb-4">
          <h2 className="font-bold uppercase text-xl font-futuraFont">Envianos tu correo</h2>
        </div>
        <p className="flex px-10 justify-center items-center font-hurme3 text-center text-sm my-5">
          Envianos tu correo! Asi pondremos mantenerte actualizado de
          información relevante, promociones, newsletters, actualizaciones de
          productos
        </p>
        <div className="w-full py-2 px-10 my-2">
          <input
            className="px-3 py-2 focus:outline-none font-hurme3 border w-full"
            placeholder="correo@gmail.com"
          ></input>
        </div>
        <div className="w-full flex flex-col  justify-center items-center">
          <button className="px-5 py-1 uppercase bg-[#B22B89] text-[#F5EF27] font-bold rounded-lg hover:cursor-pointer hover:scale-105 transition duration-200">
            ENVIAR
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col md:w-4/12 h-[300px] justify-start items-center p-8 border-r">
        <div className="flex items-center mb-4">
          <h2 className="font-bold uppercase text-xl font-futuraFont">Terminos</h2>
        </div>
        <h3 onClick={handleNavigateToLegal} className="my-2 font-semibold text-center underline underline-offset-1 decoration-stone-500 font-hurme3 hover:cursor-pointer hover:text-[#B22B89] transition duration-200">Legales</h3>
        <h3 onClick={handleNavigateToLegal} className="my-2 font-semibold text-center underline underline-offset-1 decoration-stone-500 font-hurme3 hover:cursor-pointer hover:text-[#B22B89] transition duration-200">Términos y Condiciones de Uso</h3>
        <h3 onClick={handleNavigateToEcomerceTerms} className="my-2 font-semibold text-center underline underline-offset-1 decoration-stone-500 font-hurme3 hover:cursor-pointer hover:text-[#B22B89] transition duration-200">Política de Privacidad</h3>
        <h3 onClick={handleNavigateToCookiesTerms} className="my-2 font-semibold text-center underline underline-offset-1 decoration-stone-500 font-hurme3 hover:cursor-pointer hover:text-[#B22B89] transition duration-200">Política de Cookies</h3>
      </div>
      <div className="w-full flex flex-col md:w-4/12 h-[300px] items-start p-8 text-center border-l-2 border-black">
        <div className="text-center mb-4 w-full">
          <h2 className="font-bold uppercase text-xl font-futuraFont">Reclamaciones</h2>
        </div>
        <h3 className="my-2 font-semibold w-full font-hurme3">contacto@tambo.com</h3>
        <div className="w-full flex flex-col  justify-center items-center">
          <button onClick={handleNavigateComplains} className="px-5 py-3 mt-5 uppercase bg-[#B22B89] text-[#F5EF27] font-bold rounded-lg hover:cursor-pointer hover:scale-105  transition duration-200">
            Libro de reclamaciones
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerFutterWhatis;
