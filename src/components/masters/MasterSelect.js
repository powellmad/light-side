import React, { useContext, useEffect } from "react"
import { MasterContext } from "./MasterProvider"
import { Master } from "./Master"
import "./Master.css"

export const MasterSelect = () => {
    const { masters, getMasters } = useContext(MasterContext)

    useEffect(() => {
        getMasters()
    }, [])

    return (
        <div className="masterComponent">
            <h1>Choose Your Jedi Master:</h1>
            <div className="master-list">
                {masters.map(master => {
                    return <Master key={master.id} master={master} />
                })}
            </div>
        </div>
    )
}