import React, { useState } from "react";
import CardItems from "@components/AntojosComponents/CardItems";
import CardPopItem from "./CardPopItem";


const ContainerAntojos = ({ data }) => {
  const [selectedAntojo, setSelectedAntojo] = useState(null); // Estado para la tarjeta seleccionada
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir/cerrar el modal

  const openModal = (restaurant) => {
    setSelectedAntojo(restaurant);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAntojo(null);
  };
  return (
    <section className="flex flex-wrap justify-center px-2 py-2 rounded-lg bg-transparent">
      {data.map((item, index) => (
        <div key={index} className="flex my-2 mx-4 px-1 py-1 rounded-lsg bg-transparent">
          <CardItems
            price={item.price}
            name={item.name}
            img={item.srcImage}
            openModal = {() =>openModal(item)}
          />
          <CardPopItem isOpen={isModalOpen} onClose={closeModal} antojo={selectedAntojo}/>
        </div>
      ))}

    </section>
  );
};

export default ContainerAntojos;
