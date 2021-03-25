import React, { useContext, useEffect, useState } from "react"
import { JediContext } from "./JediProvider"
import { Link } from "react-router-dom"
import { Jedi } from "./Jedi"
import "./Jedi.css"

export const JediSelect = () => {
    const { jedi, getJedi } = useContext(JediContext)
    
    useEffect(() => {
        getJedi()
    }, [])
    
    return (
        <div className="jediComponent">
            <h1>Choose Your Jedi Instructor:</h1>
            <div className="jedi-list">
                {jedi.map(jedi => {
                    return <Jedi key={jedi.id} jedi={jedi} />
                })}
            </div>
                <Link to="/" className="jedi-close">Close</Link>
        </div>
    )
}