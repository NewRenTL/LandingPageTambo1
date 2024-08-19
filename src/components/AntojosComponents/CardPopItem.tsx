import CrossCloseSVG from "@assets/svg/CrossCloseSVG";
import ShoppingCarSVG from "@assets/svg/ShoppingCarSVG";
import React, { useContext } from "react";
import { mainContext } from "@src/contexts/MainContext";
import { useState } from "react";
import PlusIconsSVG from "@assets/svg/PlusIconsSVG";
import MinusIconSVG from "@assets/svg/MinusIconSVG";

interface popAntojoItem {
  name: string;
  price: number;
  srcImage: string;
}
interface ModalRestaurantProps {
  isOpen: boolean;
  onClose: () => void;
  antojo: popAntojoItem | null;
}

interface MainContextType {
  counterCar: number;
  setCounterCar: (value: number) => void;
  incrementCar: () => void;
  incrementWithNumber:(value:number)=>void;
  decrementCar: () => void;
  resetCar: () => void;
  addItem:(value:Object) => void;
  items:Object[]
}

const CardPopItem: React.FC<ModalRestaurantProps> = ({
  isOpen,
  onClose,
  antojo,
}) => {
  if (!isOpen || !antojo) return null;

  const [counterAntojoShop, setCounterAntojoShop] = useState(0);

  const context = useContext(mainContext) as MainContextType;

  if (!context) {
    throw new Error("useContext must be used within a MainProvider");
  }

  const [objectCreate, setObjectCreate] = useState(null)

  const {incrementWithNumber,addItem,items} = context;

  const incrementAntojoShop = () => {
    setCounterAntojoShop((prev) => prev + 1);
  };
  const decrementAntojoShop = () => {
    setCounterAntojoShop((prev) => {
      if (prev - 1 < 0) {
        return 0;
      }
      return prev - 1;
    });
  };

  const addShoppingCar = () =>{
    if(counterAntojoShop > 0){
      incrementWithNumber(counterAntojoShop)
      
      addItem({
        ...antojo,
        amount:counterAntojoShop,
      })
      onClose();
    }  
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-5 z-50 flex h-auto justify-center items-center">
      <div className="bg-white flex flex-col rounded-lg px-5 py-2 md:py-4 w-10/12 md:w-6/12 overflow-y-auto h-[500px]">
        <div
          onClick={onClose}
          className="flex flex-row  w-full justify-end mb-2"
        >
          <div className="flex w-6 hover:scale-105 transition duration-150 hover:cursor-pointer">
            <CrossCloseSVG />
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center lg:items-start lg:flex-row">
          <div className="flex flex-col w-[80%] justify-center items-center lg:[48%]">
            <img className="flex flex-row" src={antojo.srcImage}></img>
          </div>
          <div className="flex flex-col w-[90%] items-center px-3 lg:w-[48%]">
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start py-5 px-6 w-full h-[80%]">
              <p className="text-center lg:text-start text-5xl font-futuraFont underline flex">
                {antojo.name}
              </p>
              <p className="text-center lg:text-start text-4xl font-futuraFont my-10 flex">
                S/{antojo.price}
              </p>
            </div>
            <div className="w-[95%] flex flex-row p-4 bg-red-600 rounded-xl">
              <div
                className="w-[12%] mr-2 flex hover:scale-105 hover:cursor-pointer transition duration-200"
                onClick={incrementAntojoShop}
              >
                <PlusIconsSVG></PlusIconsSVG>
              </div>
              <div className="w-[15%] mr-2 justify-center items-center text-3xl font-hurme3 flex">
                {counterAntojoShop}
              </div>
              <div
                className="w-[12%] mr-2 flex hover:scale-105 hover:cursor-pointer transition duration-200"
                onClick={decrementAntojoShop}
              >
                <MinusIconSVG></MinusIconSVG>
              </div>
              <div
                onClick={addShoppingCar}
                className="w-[61%] flex hover:scale-105 items-center text-center hover:text-slate-50 justify-center font-bold text-xl hover:cursor-pointer transition duration-200"
              >
                Agregar al carro
              </div>
              {/* <div className="w-[15%] flex">
                <MinusIconSVG></MinusIconSVG>
              </div> */}
              {/* <div className="w-[20%] flex">
                <ShoppingCarSVG></ShoppingCarSVG>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPopItem;
