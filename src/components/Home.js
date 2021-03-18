import userEvent from "@testing-library/user-event"
import React from "react"
import { QuoteSelection } from "./quotes/QuoteSelection"
import "./Home.css"

export const Home = () => (
    <div className="home">
        <h1>Welcome, Padawan!</h1>
        {/* MasterSelection */}
        <QuoteSelection />
    </div>
)