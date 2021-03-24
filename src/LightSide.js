import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ApplicationViews } from "./components/ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { userStorageKey } from "./auth/authSettings"

export const LightSide = () => (
  <>
      <Route render={() => {
        if (sessionStorage.getItem(userStorageKey)) {
          return (
            <div className="light-side">
              <Header />
              <ApplicationViews />
              <Footer />
            </div>
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