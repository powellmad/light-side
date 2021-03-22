import userEvent from "@testing-library/user-event"
import React from "react"
import { QuoteSelection } from "./quotes/QuoteSelection"
import { MasterDetail } from "./masters/MasterDetail"
import { userStorageKey } from "../auth/authSettings"
import "./Home.css"


export const Home = () => {
    const currentUser = sessionStorage.getItem(userStorageKey) 
    console.log("the current user is", currentUser)

    return (
    <div className="home">
        <h1>Welcome, Padawan!</h1>
        <div className="mastersQuotes">
            <MasterDetail />
            <QuoteSelection />
        </div>
    </div>
    )
}
