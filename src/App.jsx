import { useState } from "react";
import TopBar from "./layouts/TopBar.jsx";
import TemplateBodyMain from "./pages/TemplateBodyMain.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TemplateAboutUs from "./pages/TemplateAboutUs.tsx";
import TemplateContact from './pages/TemplateContact.tsx'
import TemplateLegalTerms from "./pages/TemplateLegalTerms.tsx";
import TemplateCookies from "./pages/TemplateCookies.tsx";
import TemplateEcomerceTerms from "./pages/TemplateEcomerceTerms.tsx";
function App() {
  return (
    <>
      <div className="flex flex-col w-full">
      <BrowserRouter>
        <TopBar />
       
          <Routes>
            <Route index element={<TemplateBodyMain></TemplateBodyMain>}></Route>
            <Route path="/home" element={<TemplateBodyMain />}></Route>
            <Route path="/aboutus" element={<TemplateAboutUs/>}></Route>
            <Route path="/complaintForm" element={<TemplateContact/>}></Route>
            <Route path="/legalTerms" element={<TemplateLegalTerms/>}></Route>
            <Route path="/cookiesTerms" element={<TemplateCookies/>}></Route>
            <Route path="/ecomerceTerms" element={<TemplateEcomerceTerms/>}></Route>
            <Route path="*" element={<TemplateBodyMain></TemplateBodyMain>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
