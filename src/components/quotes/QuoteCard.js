import React, { useState, useContext, useEffect } from "react"
import { UserContext } from "../users/UserProvider"

export const QuoteCard = ({ quote }) => {
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"))
    const {getUserById } = useContext(UserContext)
    const [userObject, setUserObject] = useState({})

    useEffect(() => { 
        getUserById(currentUser)
            .then(setUserObject)
    }, [])

    return (
        <section className="quote">
            <div className="quote_text">"{userObject.jediId === 1 ? quote?.yodatext : quote?.jeditext}"</div>
        </section>
    )
}