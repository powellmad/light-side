import userEvent from "@testing-library/user-event"
import React from "react"
import { Link } from "react-router-dom"
import "./Home.css"

export const Header = () => (
    <header className="header">
        <div className="header__logo">
        <Link className="header__link" to="/"><h2>The Light Side of the Force</h2></Link>
        </div>
        <div className="header__user">
            <h3>Padawan</h3>
            <image src="#" alt="user's avatar"></image>
            <Link className="header__link" to="/notes">Padawan Journal</Link>
            {/* light saber icon from database */}
        </div>
    </header>
)

//Footer: https://starwarsavatar.com/