import React from "react";
import tambo from "@assets/img/tambo.png";
import { useNavigate } from "react-router-dom";

const IconStore = () => {
  const navigate = useNavigate();
  const handleNavigateToHome = () => {
    navigate("/home");
  };
  return (
    <div className="hidden p-3 mx-1 sm:w-1/5 sm:flex justify-center items-center">
      <img
        onClick={handleNavigateToHome}
        className="w-6/6 md:w-3/6 lg:2/6 xl:w-2/6 transition-all duration-250 hover:scale-105 hover:cursor-pointer"
        src={tambo}
      ></img>
    </div>
  );
};

export default IconStore;
