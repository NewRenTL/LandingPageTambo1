import { useState } from "react";
import TopBar from "./layouts/TopBar.jsx";
import TemplateBodyMain from "./pages/TemplateBodyMain.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TemplateAboutUs from "./pages/TemplateAboutUs.tsx";

function App() {
  return (
    <>
      <div className="flex flex-col w-full">
        <TopBar />
        <BrowserRouter>
          <Routes>
            <Route index element={<TemplateBodyMain></TemplateBodyMain>}></Route>
            <Route path="/home" element={<TemplateBodyMain />}></Route>
            <Route path="/aboutus" element={<TemplateAboutUs/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
