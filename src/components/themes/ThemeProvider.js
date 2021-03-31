import React, { useState, createContext } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {
    const [themes, setThemes] = useState([])
    
    const getThemes = () => {
        return fetch(`http://localhost:8088/themes`)
        .then(res => res.json())
        .then(setThemes)
    }

    return (
        <ThemeContext.Provider value={{
            themes, setThemes, getThemes
            }}>
                {props.children}
        </ThemeContext.Provider>
    )
}