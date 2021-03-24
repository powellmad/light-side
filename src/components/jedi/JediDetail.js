import React, { useState, useEffect, useContext} from "react"
import { useHistory, Link } from "react-router-dom"
import { UserContext } from "../users/UserProvider"
import { JediContext } from "./JediProvider"
import "./Jedi.css"

export const JediDetail = () => {
    const {getJedi} = useContext(JediContext)
    const {getUserById } = useContext(UserContext)
    const [userObject, setUserObject] = useState({})

    const currentUser = parseInt(sessionStorage.getItem("app_user_id"))

    useEffect(() => { 
        getUserById(currentUser)
            .then(setUserObject)
            .then(getJedi)
    }, [])

    const jediMaster = userObject.jedi

    return (
        <div className="jediDetail jedi__{jedi.id}">
            <div className="jedi__selected">
                <h2 className="jedi__name">Your Jedi Master, {jediMaster?.name}</h2>
                <Link to="/jedi" className="jedi__selection">Choose Jedi</Link>
            </div>
            <img className="jedi__image" src={`./jediAvatars/${jediMaster?.image}.png`} alt={`${jediMaster?.image}`} />
            <button className="jedi__about">About {jediMaster?.name}</button>
        </div>
    )
}
