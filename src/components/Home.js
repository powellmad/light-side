import userEvent from "@testing-library/user-event"
import React from "react"
import { QuoteSelection } from "./quotes/QuoteSelection"
import "./Home.css"
import { MasterSelect } from "./masters/MasterSelect"

export const Home = () => (
    <div className="home">
        <h1>Welcome, Padawan!</h1>
        <div className="mastersQuotes">
            <MasterSelect />
            <QuoteSelection />
        </div>
    </div>
)