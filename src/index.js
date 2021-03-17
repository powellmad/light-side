import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from "react-router-dom"
import './index.css'
import { LightSide } from './LightSide'

ReactDOM.render(
  <React.StrictMode>
    <LightSide />
  </React.StrictMode>,
  document.getElementById('root')
)