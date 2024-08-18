import React from "react";
import HeaderAbout from "@components/AboutUsComponents/Header/HeaderAbout";
import UploadIconSvg from "@assets/svg/UploadIconSvg.jsx";
import ContainerFutterWhatis from "@layouts/ContainerFutterWhatis.jsx";

type Props = {};

const TemplateContact = (props: Props) => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <HeaderAbout />
      <div className="flex flex-col w-full lg:w-[80%] bg-white">
        <div className="w-full flex flex-col mb-4 text-center py-10 px-5 justify-center items-center">
          <h2 className="font-futuraFont text-3xl text-[#AE3795] uppercase">
            Libro de Reclamaciones
          </h2>
        </div>
        <div className="w-full flex flex-col px-16 lg:px-28 py-8">
          <h2 className="font-futuraFont text-lg mb-5">
            Datos del consumidor reclamante:
          </h2>
          <div className="flex flex-col w-full">
            <input
              className="w-full flex mb-4 px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
              placeholder="Tipo de Documento"
            ></input>
            <div className="w-full flex flex-col">
              <div className="w-full flex flex-col lg:flex-row justify-between">
                <input
                  className="w-full lg:w-[48%] mb-4  flex px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
                  placeholder="Documento Identidad del Cliente"
                ></input>
                <input
                  className="w-full lg:w-[49%] mb-4  flex px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
                  placeholder="Nombre del cliente"
                ></input>
              </div>
              <div className="w-full flex flex-col lg:flex-row justify-between">
                <input
                  className="w-full lg:w-[48%] mb-4 flex px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
                  placeholder="Apellido Paterno"
                ></input>
                <input
                  className="w-full lg:w-[49%] mb-4 flex px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
                  placeholder="Apellido Materno"
                ></input>
              </div>
            </div>
            <input
              className="w-full flex mb-4 px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
              placeholder="Dirección"
            ></input>
            <div className="w-full flex flex-col">
              <div className="w-full flex flex-col lg:flex-row justify-between">
                <input
                  className="w-full lg:w-[48%]  mb-4 flex px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
                  placeholder="Correo"
                ></input>
                <input
                  className="w-full lg:w-[49%]  mb-4 flex px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
                  placeholder="Telefono"
                ></input>
              </div>
              <div className="w-full flex flex-col lg:flex-row justify-between">
                <input
                  className="w-full lg:w-[48%] mb-4  flex px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
                  placeholder="Edad"
                ></input>
              </div>
            </div>
            <input
              className="w-full flex mb-4 px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
              placeholder="Padre,Madre o apoderado"
            ></input>
          </div>
        </div>
        <div className="w-full flex flex-col px-16 lg:px-28 py-8">
          <h2 className="font-futuraFont text-lg mb-5">
            Datos del consumidor reclamante:
          </h2>
          <div className="flex flex-col w-full">
            {/* <input
              className="w-full flex mb-4 px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
              placeholder="Tipo de Documento"
            ></input> */}
            <div className="w-full flex flex-col">
              <div className="w-full flex flex-col lg:flex-row justify-between">
                <input
                  className="w-full lg:w-[48%] mb-4  flex px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
                  placeholder="Fecha del incidente"
                ></input>
                <input
                  className="w-full lg:w-[49%] mb-4  flex px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
                  placeholder="Canal de Compra"
                ></input>
              </div>
              <div className="w-full flex flex-col lg:flex-row justify-between">
                <input
                  className="w-full lg:w-[48%] mb-4 flex px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
                  placeholder="Identificación del bien contratado"
                ></input>
                <input
                  className="w-full lg:w-[49%] mb-4 flex px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
                  placeholder="Monto reclamado"
                ></input>
              </div>
            </div>
            <input
              className="w-full flex mb-4 px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
              placeholder="Dirección del establecimiento donde se hizo la compra"
            ></input>
            <div className="w-full flex flex-col">
              <div className="w-full flex flex-col lg:flex-row justify-between">
                <input
                  className="w-full lg:w-[48%]  mb-4 flex px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
                  placeholder="Queja/Reclamo"
                ></input>
                <input
                  className="w-full lg:w-[49%]  mb-4 flex px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
                  placeholder="Motivo de la queja o reclamo"
                ></input>
              </div>
            </div>
            <input
              className="w-full flex mb-4 px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
              placeholder="Detalle del reclamo"
            ></input>
            <input
              className="w-full flex mb-4 px-5 py-6 bg-[#F4F7FC] focus:outline-none border-b-[6px] border-[#D2D4D3]"
              placeholder="Pedido Realizado o Proveedor"
            ></input>
          </div>
          <h2 className="font-futuraFont text-lg mb-5 mt-4">
            Observaciones y Acciones Adoptadas por el proveedor
          </h2>
          <input
            className="w-full flex mb-4 px-5 py-6 bg-white focus:outline-none border-b-[1px] border-black"
            placeholder="Observaciones"
          ></input>
          <h2 className="font-futuraFont text-lg mb-5 mt-4">Evidencia</h2>
          <div className="w-full flex flex-col lg:w-[48%] items-center py-12 justify-center border-dotted border-2 border-black rounded-xl">
            <UploadIconSvg></UploadIconSvg>
            <h2 className="uppercase flex mt-10 px-10 lg:px-20 text-center text-md text-gray-500 font-semibold">
              ARRASTRA Y SUELTA UNO O VARIOS ARCHIVOS O HAZ CLICK
            </h2>
          </div>
          <h2 className="font-futuraFont text-lg mb-5 mt-4">Evidencia</h2>
          <p className="flex font-hurme3 mb-10 text-[#ACB3BB]">
            *La formulación del reclamo no impide acudir a otras vías de
            solución de controversias ni es requisito previo para interponer una
            denuncia ante Indecopi.
            <br />
            <br />
            *Sin perjuicio del derecho de los consumidores de iniciar las
            acciones correspondientes ante las autoridades competentes, los
            proveedores están obligados a atender los reclamos presentados por
            sus consumidores y dar respuesta a los mismos en un plazo no mayor
            de quince (15) días hábiles improrrogables (vigente desde
            22/05/2022).
            <br />
            <br />
            Se le informa que sus datos personales facilitados mediante este
            formulario serán usados con la finalidad de gestionar, dar
            respuesta, así como llevar un registro de las reclamaciones y de
            cumplir con las normas de protección al consumidor.
          </p>
        </div>
      </div>
      <ContainerFutterWhatis/>
    </div>
  );
};

export default TemplateContact;
