import React from "react"
import { Route, Redirect } from "react-router-dom"

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
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
)