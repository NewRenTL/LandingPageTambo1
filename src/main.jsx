import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TopBar from './layouts/TopBar.jsx'
import BodySection from './layouts/BodySection.jsx'
import Destacados from "@layouts/Destacados.jsx"
import AntojosWeek from '@layouts/AntojosWeek.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TopBar/>
    <BodySection/>
    <Destacados/>
    <AntojosWeek/>
    <App />
  </React.StrictMode>,
)
