import React from "react";
import TamboPofView from "@assets/img/TamboPofView.jpg";
import TamboSec1_1 from "@assets/img/TopImageSec1.jpg";
const FourSections = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full flex md:w-[50%] overflow-hidden">
          <img src={TamboPofView} className="object-cover"></img>
        </div>
        <div className="w-full flex px-16 py-12  flex-col md:w-[50%]  text-[#F3E82A] bg-[#B22B89]">
          <div className="w-full my-8 flex">
            <h2>INNOVACIÓN Y PREFERENCIA DE COMPRA</h2>
          </div>
          <div className="w-full mb-8 flex">
            <p>
              Tambo+ se destaca por su contanste innovación en la experiencia de
              compra, implementando tecnologías modernas para mejorar la
              eficiencia del servicio y ofrecer un ambiente de tienda cómodo y
              acogedor qeu atrae a los clientes
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full flex px-16 py-12 flex-col md:w-[50%] text-[#B22B89] bg-[#F3E82A]">
          <div className="w-full my-8 flex">
            <h2>COMPROMISO CON LA COMUNIDAD</h2>
          </div>
          <div className="w-full mb-8 flex">
            <p>
              Tambo+ muestra un fuerte compromiso con las comunidades donde
              opera, participando activamente en iniciativas locales y apoyando
              eventos y actividades comunitarias, lo que contribuye
              positivamente al desarrollo social y económica de estas áreas
            </p>
          </div>
        </div>
        <div className="w-full flex md:w-[50%] overflow-hidden">
          <img src={TamboSec1_1} className="object-cover w-full flex h-[450px]"></img>
        </div>
      </div>
    </div>
  );
};

export default FourSections;
