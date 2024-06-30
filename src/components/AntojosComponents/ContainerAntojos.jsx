import React, { useState } from "react";
import CardItems from "@components/AntojosComponents/CardItems";
import LayX from "@assets/img/LAYX.png";

const ContainerAntojos = ({ data }) => {
  return (
    <section className="flex flex-wrap justify-center px-2 py-2 rounded-lg bg-red-700">
      {data.map((item, index) => (
        <div className="flex my-2 mx-4 px-1 py-1 rounded-lsg bg-red-200">
          <CardItems
            key={index}
            price={item.price}
            name={item.name}
            img={LayX}
          />
        </div>
      ))}
    </section>
  );
};

export default ContainerAntojos;
