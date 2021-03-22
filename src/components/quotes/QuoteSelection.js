import React, { useContext, useEffect } from "react"
import { QuoteContext } from "./QuoteProvider"
import { useHistory } from "react-router-dom"
import { QuoteCard } from "./QuoteCard"
import "./Quote.css"


export const QuoteSelection = () => {
    const { quotes, getQuotes } = useContext(QuoteContext)
    const history = useHistory()
    

  useEffect(() => {
    getQuotes()
    }, [])

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    

    // console.log("show quote")
    return (
    <div className="quoteComponent">
        {console.log("QuoteList: Render", quotes)}
        <div className="quote-selection">
        <QuoteCard quote={randomQuote}/>
        </div>    
        <button onClick={() => {history.push("/")}}>
          Next Quote
        </button>
        <button onClick={() => {history.push(`/quotes/${randomQuote.id}/notes/create`)}}>
          Add Note
        </button>
    </div>
  )
}