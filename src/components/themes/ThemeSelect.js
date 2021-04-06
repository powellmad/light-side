import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "./ThemeProvider"
import { Link } from "react-router-dom"
import { Theme } from "./Theme"
import "./Theme.css"

export const ThemeSelect = () => {
    const { themes, getThemes } = useContext(ThemeContext)

    useEffect(() => {
        getThemes()
    }, [])
    
    // Maps through themes (get request) and renders a list of lightsaber theme options
    return (
        <div className="themeComponent">
            <h1>Choose Your lightsaber Color:</h1>
            <div className="theme-list">
                {themes.map(theme => {
                    return <Theme className="lightsaber" key={theme.id} theme={theme} />
                })}
            </div>
                <Link to="/" className="theme-close">Close</Link>
        </div>
    )
}