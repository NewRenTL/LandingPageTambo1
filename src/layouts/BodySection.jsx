import React from "react";
import InternBar from "@src/components/internContentBar/InternBar";
import Banner from "@src/components/internContentBar/Banner";
const BodySection = () => {
  return (
    <div className="flex px-1 md:px-10 py-2 w-full bg-red-500">
      <InternBar />
      <Banner />
    </div>
  );
};

export default BodySection;
