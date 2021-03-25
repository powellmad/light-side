import React from "react"


export const QuoteCard = ({ quote }) => {
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"))

    return (
        <section className="quote">
            <div className="quote_text">"{currentUser.jediId === 1 ? quote?.yodatext : quote?.jeditext}"</div>
        </section>
    )
}