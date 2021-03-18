import React from "react"
import { QuoteProvider } from "./quotes/QuoteProvider"
import { QuoteSelection } from "./quotes/QuoteSelection"

export const Home = () => (
    <div className="home">
        <h1>Welcome, Padawan!</h1>
        <QuoteProvider>
            <QuoteSelection />
        </QuoteProvider>
    </div>
)