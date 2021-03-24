import React, { useContext, useEffect, useState } from "react"
import { MasterContext } from "./MasterProvider"
import { UserContext } from "../users/UserProvider"
import { Link } from "react-router-dom"
import { MasterDetail } from "./MasterDetail"
import { Master } from "./Master"
import "./Master.css"

export const MasterSelect = () => {
    const { masters, getMasters, updateMaster } = useContext(MasterContext)
    const { getUserById } = useContext(UserContext)

    const currentUser = parseInt(sessionStorage.getItem("app_user_id"))

    useEffect(() => {
        getMasters()
        .then(getUserById(currentUser))
    }, [])

    return (
        <div className="masterComponent">
            <h1>Choose Your Jedi Instructor:</h1>
            <div className="master-list">
                {masters.map(master => {
                    return <Master key={master.id} master={master} />
                })}
            </div>
            <Link to="/" className="master-close">Close</Link>
        </div>
    )
}