import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TopBar from './layouts/TopBar.jsx'
import BodySection from './layouts/BodySection.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*Comment to separate branches Main and Develop */}
    <TopBar/>
    <BodySection/>
    <App />
  </React.StrictMode>,
)
