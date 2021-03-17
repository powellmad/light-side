import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./components/ApplicationViews"
// import { Login } from "./auth/Login"
// import { Register } from "./auth/Register"

export const LightSide = () => (
    <>
        <Route path="/">
            <ApplicationViews />
        </Route>
    </>
)