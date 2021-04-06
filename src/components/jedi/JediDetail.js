import React, { useState, useEffect, useContext} from "react"
import { useHistory, Link } from "react-router-dom"
import { UserContext } from "../users/UserProvider"
import { JediContext } from "./JediProvider"
import "./Jedi.css"

// The single jedi card of the user's current master rendered on the DOM.
export const JediDetail = () => {
    const { getJedi } = useContext(JediContext)
    const { getUserById } = useContext(UserContext)
    const [userObject, setUserObject] = useState({})

    const currentUser = parseInt(sessionStorage.getItem("app_user_id"))

    // Gets currentUser info and sets it as a state variable
    useEffect(() => { 
        getUserById(currentUser)
            .then(setUserObject)
            .then(getJedi)
    }, [])

    return (
        <div className="jediDetail jedi__{jedi.id}">
            <div className="jedi__selected">
                <h2 className="jedi__header">Your Jedi Master</h2>
                <h2 className="jedi__name">{userObject.jedi?.name}</h2>
                <Link to="/jedi" className="jedi__selection">Choose Jedi</Link>
            </div>
            <img className="jedi__image" src={`./jediAvatars/${userObject?.jedi?.image}.png`} alt={`${userObject.jedi?.image}`} />
            <button className="jedi__about main-button">About {userObject.jedi?.name}</button>
        </div>
    )
}