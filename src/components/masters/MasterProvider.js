import React, { useState, createContext } from "react"

export const MasterContext = createContext()

export const MasterProvider = (props) => {
    const [masters, setMasters] = useState([])
    
    const getMasters = () => {
        return fetch(`http://localhost:8088/masters`)
        .then(res => res.json())
        .then(setMasters)
    }

    const updateMaster = id => {
        return fetch(`http://localhost:8088/masters/${id}?`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
              masterId: ""
          })
        })
          .then(getMasters)
      }

    return (
        <MasterContext.Provider value={{
            masters, getMasters, updateMaster
            }}>
                {props.children}
        </MasterContext.Provider>
    )
}