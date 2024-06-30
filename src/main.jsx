import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TopBar from './layouts/TopBar.jsx'
import BodySection from './layouts/BodySection.jsx'
import Destacados from "@layouts/Destacados.jsx"
import AntojosWeek from '@layouts/AntojosWeek.jsx'
import RecommendDay from '@layouts/RecommendDay.jsx'
import FooterPage from '@layouts/FooterPage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TopBar/>
    <BodySection/>
    <Destacados/>
    <AntojosWeek nameSection ="Top Antojos de Esta Semana"/>
    <RecommendDay />
    <AntojosWeek nameSection= "Top Más Necesitados el Finde"/>
    <FooterPage />
    <App/>
  </React.StrictMode>,
)
