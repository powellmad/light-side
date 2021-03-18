import React from "react"

export const QuoteCard = ({ quote }) => (
    <section className="quote">
        <div className="quote_text">"{quote?.mastertext}"</div>
    </section>
)