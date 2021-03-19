import React, { useState, createContext } from "react"

export const QuoteContext = createContext()

export const QuoteProvider = (props) => {
    const [quotes, setQuotes] = useState([])
    
    const getQuotes = () => {
        return fetch(`http://localhost:8088/quotes`)
        .then(res => res.json())
        .then(setQuotes)
    }

    const useQuote = quote => {
        return fetch(`http://localhost:8088/quotes/${quote.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(quote)
        })
          .then(getQuotes)
      }

    return (
        <QuoteContext.Provider value={{
            quotes, getQuotes, useQuote
            }}>
                {props.children}
        </QuoteContext.Provider>
    )
}