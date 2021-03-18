import React, { useContext, useEffect, useState } from "react"
import { QuoteContext } from "./QuoteProvider"
import { useHistory } from "react-router-dom"
import { QuoteCard } from "./QuoteCard"

export const QuoteSelection = () => {
    const {quotes, getQuotes} = useContext(QuoteContext)
    
    const history = useHistory()
    
    useEffect(() => {
        getQuotes()
    }, [])

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    console.log(randomQuote)

    // console.log("show quote")
    return (
    <div className="quoteComponent">
        <h2>Quotes</h2>

        <div className="quote-selection">
        {<QuoteCard quote={randomQuote}/>}
        </div>
        
        <button onClick={() => {history.push("/")}}>
        Next Quote
        </button>
    </div>
  )
}