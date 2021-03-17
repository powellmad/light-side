import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./components/ApplicationViews"
// import { Login } from "./auth/Login"
// import { Register } from "./auth/Register"

export const LightSide = () => (
    <>
        <Route
            render={() => {
                if (localStorage.getItem("lightSide_user")) {
                    return (
                      <>
                        <ApplicationViews />
                      </>
                    );
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />
        {/* <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route> */}
    </>
)