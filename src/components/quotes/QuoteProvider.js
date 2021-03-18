import React, { useState, createContext } from "react"

export const QuoteContext = createContext()

export const QuoteProvider = (props) => {
    const [quotes, setQuotes] = useState([])
    
    const getQuotes = () => {
        return fetch("http://localhost:8088/quotes")
        .then(res => res.json())
        .then(setQuotes)
    }

    const getRandomQuote = () => {
        return fetch(`http://localhost:8088/quotes`)
        .then(res => res.json())
        .then((quotes) => {
        const randomQuoteId = Math.floor(Math.random() * quotes.length)
        return randomQuoteId
        })
    }
    
    return (
        <QuoteContext.Provider value={{
            quotes, getQuotes, getRandomQuote
            }}>
                {props.children}
        </QuoteContext.Provider>
    )
}