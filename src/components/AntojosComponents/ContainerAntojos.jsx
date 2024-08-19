import React, { useState } from "react";
import CardItems from "@components/AntojosComponents/CardItems";


const ContainerAntojos = ({ data }) => {
  return (
    <section className="flex flex-wrap justify-center px-2 py-2 rounded-lg bg-transparent">
      {data.map((item, index) => (
        <div key={index} className="flex my-2 mx-4 px-1 py-1 rounded-lsg bg-transparent">
          <CardItems
            price={item.price}
            name={item.name}
            img={item.srcImage}
          />
        </div>
      ))}
    </section>
  );
};

export default ContainerAntojos;
