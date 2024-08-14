import React from "react";
import HeaderAbout from "@components/AboutUsComponents/Header/HeaderAbout";
import Card from "@components/WhatIsComponents/Card";
import ConvenienceKindness from "@assets/svg/ConvenienceKindness";
import CustomerService from "@assets/svg/CustomerServiceSvg";
import ProductVariety from "@assets/svg/ProductVarietySvg";
import SecImage from "@components/WhatIsComponents/SecImage";
import FourSections from "@layouts/FourSections";
import PromotionsAndFidelitySvg from "@assets/svg/PromotionsAndFidelitySvg";
import InnovationAndModernitySvg from "@assets/svg/InnovationAndModernitySvg";
import CommunityImpactSvg from "@assets/svg/CommunityImpactSvg";

const listOfWhatIs = [
  {
    svg: ConvenienceKindness,
    title: "Conveniencia y Accesibilidad",
    subContent:
      "Tambo+ se caracteriza por estar ubica en zona estrategicas y urbanas,facilitando a los cliente el acceso rápido y facil a productos de primera necesidad a cualquier hora del día",
  },
  {
    svg: CustomerService,
    title: "Atención al cliente",
    subContent:
      "Tambo+ se esfuerza por birnda una experiencia de compra agradable con un servicio al cliente eficiente y amable, asegurando que los clientes encuentren lo que necesitan rápidamente",
  },
  {
    svg: ProductVariety,
    title: "Variedad de productos",
    subContent:
      "La cadena ofrece una amplia gama de productos,incluyendo alimentos,bebidas,artículos de higiene personal,productos de limpieza y otros artículos esenciales, satisfaciendo diversas necesidades de los consumidores",
  },
];

const listOfWhatIs2 = [
  {
    svg: PromotionsAndFidelitySvg,
    title: "Promociones y Fidelización",
    subContent:
      "La marca implementa regularmente promociones atractivas y programas de fidelización para recompensar y retener a sus clientes habituales, creando una base de clientes leal",
  },
  {
    svg:  InnovationAndModernitySvg,
    title: "Innovación y Modernidad",
    subContent:
      "Tambo+ se mantiene a la vanguardia mediante en sus operaciones y un diseño de tienda actualizado y acogedor, mejorando la experiencia de compra",
  },
  {
    svg: CommunityImpactSvg,
    title: "Impacto Comunitario",
    subContent:
      "La cadena busca tener un impacto positivo en las comunidades donde opera, creando empleos locales y contribuyendo al desarrollo económico y social de las áreas urbanas del Perú",
  },
];

const TemplateAboutUs: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col w-full">
        <HeaderAbout />
      </div>
      <SecImage />
      <div className="flex flex-col w-full items-center bg-transparent">
        <div className="flex flex-col justify-center items-center py-5">
          <h2 className="text-3xl font-bold">TAMBO ES</h2>
        </div>
        <div className="flex flex-col sm:flex-row w-full justify-center items-center py-5 px-10 ">
          {listOfWhatIs.map((item) => (
            <Card
              key={item.title}
              svgComponent={item.svg}
              Title={item.title}
              SubContent={item.subContent}
            ></Card>
          ))}
        </div>
      </div>
      <FourSections></FourSections>
      <div className="flex flex-col w-full items-center bg-transparent">
        <div className="flex flex-col justify-center items-center py-5">
          <h2 className="text-3xl font-bold">TAMBO ES</h2>
        </div>
        <div className="flex flex-col sm:flex-row w-full justify-center items-center py-5 px-10 ">
          {listOfWhatIs2.map((item) => (
            <Card
              key={item.title}
              svgComponent={item.svg}
              Title={item.title}
              SubContent={item.subContent}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateAboutUs;
