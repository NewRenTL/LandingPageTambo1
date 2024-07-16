import React from "react";
import TextFooter from "@components/WeareTambo/TextFooter";
import Contactos from "@components/WeareTambo/Contactos";
const FooterPage = () => {
  return (
    <div
    className="flex flex-col my-2 px-2 py-2 bg-transparent justify-center items-center w-full"
    >
      <div className="container flex flex-col md:flex-row justify-between w-[90%]">
      <TextFooter />
      <Contactos />
      </div>
    </div>
  );
};

export default FooterPage;
