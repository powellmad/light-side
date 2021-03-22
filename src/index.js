import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import './index.css'
import { LightSide } from './LightSide'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LightSide/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)