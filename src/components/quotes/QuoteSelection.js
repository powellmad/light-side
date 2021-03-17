import React, { useContext, useEffect } from "react"
import { QuoteContext } from "./QuoteProvider"
import { useHistory } from "react-router-dom"
import { QuoteCard } from "./QuoteCard"


export const QuoteSelection = () => {
    const { quotes, getQuotes } = useContext(QuoteContext)
    const history = useHistory()
    

  useEffect(() => {
    getQuotes()
    }, [])

    const randomQuoteId = quotes[Math.floor(Math.random() * quotes.length)]
    
    console.log(randomQuoteId)

    // console.log("show quote")
    return (
    <div className="quoteComponent">
        {console.log("QuoteList: Render", quotes)}
        <h2>Quotes</h2>
        <div className="quote-selection">
        </div>    

        <QuoteCard quote={randomQuoteId}/>
        
        <button onClick={() => {history.push("/")}}>
        Next Quote
        </button>
    </div>
  )
}