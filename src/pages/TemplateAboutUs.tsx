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
import SecTwoImages from "@components/WhatIsComponents/SecTwoImages";

//Images
import LastSectionImageMid1 from "@assets/img/LastSectionImageMid1.jpg";
import LastSectionImageMid2 from "@assets/img/LastSectionImageMid2.jpg";
import TestimonyContainer from "@layouts/TestimonyContainer";
import ContainerFutterWhatis from "@layouts/ContainerFutterWhatis";

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
    svg: InnovationAndModernitySvg,
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

const listOfTestimonies = [
  {
    name: "Carlos M.",
    content:
      "Me encanta ir a Tambo+ porque siempre encuentro todo lo que necesito a cualquier hora del dia. La tienda está bien organizada y el personal es muy amable. Además, las promociones que tienen son realmente buenas y me ayudan a ahorrar en mis compras diarias",
    ranking: 5,
  },
  {
    name: "Lucía R.",
    content:
      "Tambo+ es mi tienda de conveniencia favorita. Siempre tienen productos frescos y de calidad, y la ubicación de las tiendas es perfecta para hacer una parada rápida camino a casa. El programa de fidelización también es genial, ya que me permite acumular puntos y obtener descuentos",
    ranking: 5,
  },
  {
    name: "Rebeca G.",
    content:
      "Desde que descubri Tambo+, no he vuelto a otra tienda de conveniencia. Me encanta la variedad de productos que ofrecen y la limpieza de las tiendas. Siempre tienen lo que necesuto, y el servicio al cliente es excelente. Definitivamente, una gran opción para compras rápidas y eficientes",
    ranking: 5,
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
      <SecTwoImages
        image1={LastSectionImageMid1}
        image2={LastSectionImageMid2}
      />
      <TestimonyContainer testimonios={listOfTestimonies}></TestimonyContainer>
      <hr className="border border-black w-[95%] my-5"></hr>
      <ContainerFutterWhatis></ContainerFutterWhatis>
    </div>
  );
};

export default TemplateAboutUs;
