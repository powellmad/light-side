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
            <div className="user__info">
                <h3>Welcome, Padawan Madison!</h3>
                <Link className="header__link" to="/notes">My Padawan Notes</Link>
            </div>
            <div>
                <img className="lightsaber" src={"./jediAvatars/jediImages/green.png"} />
            </div>
            <img className="avatar" src={"./jediAvatars/padawan.png"} alt="user's avatar" />
        </div>
    </header>
)