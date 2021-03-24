import React, { useState, createContext } from "react"

export const JediContext = createContext()

export const JediProvider = (props) => {
    const [jedi, setJedi] = useState([])
    
    const getJedi = () => {
        return fetch(`http://localhost:8088/jedi`)
        .then(res => res.json())
        .then(setJedi)
    }

    return (
        <JediContext.Provider value={{
            jedi, setJedi, getJedi
            }}>
                {props.children}
        </JediContext.Provider>
    )
}