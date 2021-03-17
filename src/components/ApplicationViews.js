import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { QuoteProvider } from "./quotes/QuoteProvider"

export const ApplicationViews = () => {
    return (
        <>
            <QuoteProvider>
                <Route exact path="/">
                    <Home />
                </Route>
            </QuoteProvider>
        </>
    )
}