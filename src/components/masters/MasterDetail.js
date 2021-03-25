import React, { useState, useEffect, useContext} from "react"
import { useHistory, Link } from "react-router-dom"
import { UserContext } from "../users/UserProvider"
import { MasterContext } from "../masters/MasterProvider"
import "./Master.css"

export const MasterDetail = () => {
    const {getMasters } = useContext(MasterContext)
    const {getUserById } = useContext(UserContext)
    const [userObject, setUserObject] = useState({})

    const currentUser = parseInt(sessionStorage.getItem("app_user_id"))

    useEffect(() => {
        getUserById(currentUser)
            .then(setUserObject)
            .then(getMasters)
    }, [])

    const master = userObject.master

    return (
        <div className="masterDetail master__{master.id}">
            <div className="master__selected">
                <h2 className="master__name">Your Master</h2>
                <h2 className="master__name">{master?.name}</h2>
                <Link to="/masters" className="master__selection">Choose Jedi</Link>
            </div>
            <img className="master__image" src={`./jedi/${master?.image}.png`} alt={`${master?.image}`} />
            <button className="master__about">About {master?.name}</button>
        </div>
    )
}
