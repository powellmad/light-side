import React, { useContext, useEffect, useState } from "react"
import { MasterContext } from "./MasterProvider"
import { UserContext } from "../users/UserProvider"
import { Link } from "react-router-dom"
import { MasterDetail } from "./MasterDetail" 
import { Master } from "./Master"
import "./Master.css"

export const MasterSelect = () => {
    const { masters, getMasters } = useContext(MasterContext)
    
    useEffect(() => {
        getMasters()
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

export const MasterDetails = () => {
    const { masters, getMasters } = useContext(MasterContext)
    const { users, getUserById } = useContext(UserContext)
    const [userObject, setUserObject] = useState({})
    
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"))

    useEffect(() => {
        getUserById(currentUser)
        .then(setUserObject)
        .then(getMasters)
    }, [])

    return (
            <div className="masterSelection">
                <MasterDetail master={userObject.master}/>
            </div>
    )
}