import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from './components/Home'
import { ApplicationViews } from "./components/ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { userStorageKey } from "./auth/authSettings"

export const LightSide = () => (
    <>
        <Route path="/">
            <ApplicationViews />
        </Route>
        <Route render={() => {
        if (sessionStorage.getItem(userStorageKey)) {
          return (
            <>
              <Home />
            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
    }} />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>

    </>
)