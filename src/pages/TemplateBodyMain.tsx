import React from "react";
import BodySection from "../layouts/BodySection.jsx";
import Destacados from "../layouts/Destacados.jsx";
import AntojosWeek from "../layouts/AntojosWeek.jsx";
import RecommendDay from "../layouts/RecommendDay.jsx";
import FooterPage from "../layouts/FooterPage.jsx";


const TemplateBodyMain: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <BodySection />
      <Destacados />
      <AntojosWeek nameSection="Top Antojos de Esta Semana" />
      <RecommendDay />
      <AntojosWeek nameSection="Top Más Necesitados el Finde" />
      <FooterPage />
    </div>
  );
};

export default TemplateBodyMain;
