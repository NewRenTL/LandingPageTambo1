import React from "react";
import HeaderAbout from "@components/AboutUsComponents/Header/HeaderAbout";
import ContainerFutterWhatis from "@layouts/ContainerFutterWhatis.jsx";
type Props = {};

const TemplateCookies = (props: Props) => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <HeaderAbout />
      <div className="flex flex-col mb-10 w-full lg:w-[80%] bg-white">
        <div className="w-full flex flex-col mb-4 text-center py-10 px-5 justify-center items-center">
          <h2 className="font-futuraFont text-3xl text-[#AE3795] uppercase">
            Libro de Reclamaciones
          </h2>
        </div>
        <div className="w-full flex flex-col px-16 lg:px-28 py-8">
          <h2 className="font-futuraFont text-lg mb-5 mt-4 uppercase text-[#AE3795]">
            ¿Qué son las Cookies?
          </h2>
          <p className="flex flex-col font-hurme3 mb-10 text-black]">
            Para efectos del presente documento se utilizarán los mismos
            conceptos definidos en la Ley, el Reglamento y el numeral I de los
            Términos y Condiciones de Uso de los Sitios de E-Commerce de Justo,
            denominado “Definiciones”.
          </p>
          <h2 className="font-futuraFont text-lg mb-5 mt-4 uppercase text-[#AE3795]">
            ¿Qué tipos de Cookies usamos?
          </h2>
          <p className="flex flex-col font-hurme3 mb-10 text-black]">
            Usamos las siguientes categorías de Cookies:
            <br />
            <br />
            1. Necesarias: Las cookies necesarias nos ayudan a
            hacer utilizable el Sitio Web, toda vez que nos permiten activar sus
            funciones básicas (como, por ejemplo, la navegación dentro del Sitio
            Web). El Sitio Web no puede funcionar adecuadamente sin estas
            cookies.
            <br />
            <br />
            2. Estadísticas: Las cookies estadísticas nos
            ayudan a comprender cómo interactúan los usuarios con el Sitio Web.
            Para ello, estas cookies recopilan, administran y procesan
            información anonimizada sobre las acciones de los usuarios en el
            Sitio Web.
            <br />
            <br />
            3. Funcionales: Las cookies funcionales son
            aquellas que resultan necesarias para operar algunas funciones de la
            página web que (sin ser esenciales para su funcionamiento) ayudan en
            mejorar la experiencia de los usuarios.
            <br />
            <br />
            4. De Marketing: Las cookies de marketing se
            utilizan para analizar posibles intereses y/o necesidades de los
            usuarios del Sitio Web. Lo anterior, con el propósito de mostrarles
            anuncios publicitarios de conformidad con su perfil individual.
          </p>
          <h2 className="font-futuraFont text-lg mb-5 mt-4 uppercase text-[#AE3795]">
            Recopilación de datos personales a través de las Cookies
          </h2>
          <p className="flex flex-col font-hurme3 mb-10 text-black">
          La cookie de marketing es la única cookie que usamos que podría recopilar datos personales de los usuarios. Por ello, dicha cookie sólo se activa para aquellos usuarios que consienten expresamente el uso de cookies para esa finalidad.

<br /><br />

En la medida que la cookie de marketing que utilizamos es proveída por Facebook Inc., dicha empresa podrá ser destinataria temporal de los datos personales que la cookie de marketing recopile.

<br /><br />

Asimismo, se informa que los datos personales que recopile la cookie de marketing serán tratados por Get Justo de conformidad con lo establecido en el “Consentimiento para el uso de la cookie de marketing” y la “Política de Privacidad de Get Justo”.
          </p>
        </div>
      </div>
      <ContainerFutterWhatis />
    </div>
  );
};

export default TemplateCookies;
