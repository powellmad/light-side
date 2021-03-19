import React, { useState, createContext } from "react"

export const MasterContext = createContext()

export const MasterProvider = (props) => {
    const [masters, setMasters] = useState([])
    
    const getMasters = () => {
        return fetch(`http://localhost:8088/masters`)
        .then(res => res.json())
        .then(setMasters)
    }

    return (
        <MasterContext.Provider value={{
            masters, getMasters
            }}>
                {props.children}
        </MasterContext.Provider>
    )
}