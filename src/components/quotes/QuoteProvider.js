import React, { useState, createContext } from "react"

export const QuoteContext = createContext()

export const QuoteProvider = (props) => {
    const [quotes, setQuotes] = useState([])
    const [quoteById, setQuoteById] = useState([])
    
    const getQuotes = () => {
        return fetch(`http://localhost:8088/quotes`)
        .then(res => res.json())
        .then(setQuotes)
    }
    
    const getQuoteById = (id) => {
        return fetch(`http://localhost:8088/quotes/${id}`)
        .then(res => res.json())
        .then(setQuoteById)
    }
    return (
        <QuoteContext.Provider value={{
            quotes, getQuotes, quoteById, getQuoteById
            }}>
                {props.children}
        </QuoteContext.Provider>
    )
}