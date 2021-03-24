import React from "react"
import { useHistory } from "react-router-dom"


export const QuoteCard = ({ quote }) => (

    <section className="quote">
        <div className="quote_text">"{quote?.jeditext}"</div>
    </section>
)