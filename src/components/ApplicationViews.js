import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

export const ApplicationViews = () => {
    return (
        <>
            <Route>
                <Home />
            </Route>
        </>
    )
}