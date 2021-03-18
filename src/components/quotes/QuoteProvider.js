import React, { useState, createContext } from "react"

export const QuoteContext = createContext()

export const QuoteProvider = (props) => {
    const [quotes, setQuotes] = useState([])
    
    const getQuotes = () => {
        return fetch("http://localhost:8088/quotes")
        .then(res => res.json())
        .then(setQuotes)
    }

    return (
        <QuoteContext.Provider value={{
            quotes, getQuotes
            }}>
                {props.children}
        </QuoteContext.Provider>
    )
}