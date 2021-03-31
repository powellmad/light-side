import userEvent from "@testing-library/user-event"
import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "./users/UserProvider"
import { ThemeContext } from "./themes/ThemeProvider"
import "./Home.css"

export const Header = () => {
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"))
    const { getThemes } = useContext(ThemeContext)
    const { getUserById } = useContext(UserContext)
    const [userObject, setUserObject] = useState({})

    // Gets currentUser info and sets it as a state variable
    useEffect(() => { 
        getUserById(currentUser)
            .then(setUserObject)
            .then(getThemes)
    }, [])

    return (
        <header className="header">
            <div className="header__logo">
                <Link className="header__link" to="/"><h2>The Light Side of the Force</h2></Link>
            </div>

            <div className="header__user">
                <div className="user__info">
                    <h3>Welcome, Padawan {userObject?.firstName}!</h3>
                    <Link className="header__link" to="/notes">My Padawan Notes</Link>
                </div>
                <div>
                    <img className="lightsaber" src={`./jediImages/${userObject?.theme?.color}.png`}/>
                </div>
                <img className="avatar" src={"./jediAvatars/padawan.png"} alt="user's avatar" />
            </div>
        </header>
    )
}