import React from "react";
import InternBar from "@src/components/internContentBar/InternBar";
import myDataWithCategories from "@src/data/dataCategories";
import Banner from "@src/components/internContentBar/Banner";
import { useContext } from "react";
import { useState } from "react";
import { mainContext } from "@src/contexts/MainContext";
import CardItems from "@components/AntojosComponents/CardItems";
import CardPopItem from "@components/AntojosComponents/CardPopItem";
const BodySection = () => {
  const { sectionEstablished } = useContext(mainContext);
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

  const filteredItems = myDataWithCategories.filter(
    (item) => item.category === sectionEstablished
  );

  return (
    <div className="flex px-1 md:px-2 py-2 w-full bg-transparent">
      <InternBar />
      {sectionEstablished ? (
        <div className="flex flex-wrap justify-center items-center border-4 border-[#B22D8A] rounded-xl w-4/5 overflow-x-auto">
          {filteredItems.map((item) => (
            <CardItems
              key={item.id}
              name={item.name}
              price={item.price}
              img={item.srcImage}
              openModal = {() => openModal(item)}
              heightOptional = "h-[300px]"
            />
          ))}
          <CardPopItem
            isOpen={isModalOpen}
            onClose={closeModal}
            antojo={selectedAntojo}
          />
        </div>
      ) : (
        <Banner />
      )}
    </div>
  );
};

export default BodySection;
