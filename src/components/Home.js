import userEvent from "@testing-library/user-event"
import React from "react"
import { Link } from "react-router-dom"
import { QuoteSelection } from "./quotes/QuoteSelection"
import "./Home.css"

export const Home = () => (
    <div className="home">
        <header className="header">
            <div className="header__logo">
                <h2>The Light Side of the Force</h2>
            </div>
            <div className="header__user">
                <h3>Welcome, Padawan</h3>
                <image src="#" alt="user's avatar"></image>
                <Link className="header__journal" to="/notes">Padawan Journal</Link>
                {/* light saber icon from database */}
            </div>
        </header>
        {/* <h1>Welcome, Padawan!</h1> */}
        {/* MasterSelection */}
        <QuoteSelection />
    </div>
)