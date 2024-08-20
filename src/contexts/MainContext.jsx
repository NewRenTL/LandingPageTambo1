import React, { Children, useState, useEffect } from "react";
import { mainContext } from "./MainContext";

const MainContext = ({ children }) => {
  const [counterCar, setCounterCar] = useState(0);
  const [items, setItems] = useState([]);
  const [wishes,setWishes] = useState([])

  const incrementCar = () => {
    setCounterCar((prev) => prev + 1);
  };

  const incrementWithNumber = (prevPre) => {
    setCounterCar((prev) => prev + prevPre);
  };

  const decrementCar = () => {
    setCounterCar((prev) => {
      if (prev - 1 < 0) {
        return 0;
      }
      return prev - 1;
    });
  };

  const resetCar = () => {
    setCounterCar(0);
  };

  const addItem = (item) => {
    if (items.length === 0) {
      setItems([item]);
    } else {
      setItems((prevItems) => [...prevItems, item]);
    }
  };

  const removeItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

//   useEffect(() => {
//     console.log("Items updated:", items);
//   }, [items]);

  return (
    <mainContext.Provider
      value={{
        counterCar,
        incrementWithNumber,
        setCounterCar,
        addItem,
        removeItem,
        incrementCar,
        items,
        setItems,
        decrementCar,
        resetCar,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};

export default MainContext;
