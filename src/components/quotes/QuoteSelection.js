import React, { useContext, useEffect, useState } from "react"
import { QuoteContext } from "./QuoteProvider"
import { QuoteCard } from "./QuoteCard"

export const QuoteSelection = () => {
    const { quotes, getQuotes, getRandomQuote } = useContext(QuoteContext)
    const [randomQuote, setRandomQuote] = useState(0)

    useEffect(() => {
        getQuotes()
    }, [])
    
    useEffect(() => {
        randomQuoteId()
    }, [])
    
    // const randomQuoteId = quotes[Math.floor(Math.random() * quotes.length)]
    const randomQuoteId = () => {
        getRandomQuote()
        .then(setRandomQuote)
    }    

    // console.log("show quote")
    return (
    <div className="quoteComponent">
        <h2>Quotes</h2>

        <div className="quote-selection">
        {<QuoteCard quote={}/>}
        </div>
        
        <button onClick={randomQuoteId}>
        Next Quote
        </button>
    </div>
  )
}