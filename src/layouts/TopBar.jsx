import React from "react";

import FindBar from "../components/findbarComps/FindBar";
import ContainerButtoms from "../components/findbarComps/ContainerButtoms";
import IconStore from "../components/findbarComps/IconStore";
const TopBar = () => {
  return (
    <nav className="w-full z-50 h-16 top-0 flex sticky py-2 px-1 justify-around bg-[#FBE3F0] items-center">
      <IconStore />
      <FindBar />
      <ContainerButtoms />
    </nav>
  );
};

export default TopBar;
