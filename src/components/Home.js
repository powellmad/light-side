import userEvent from "@testing-library/user-event"
import React from "react"
import { QuoteSelection } from "./quotes/QuoteSelection"
import { MasterDetails } from "./masters/MasterSelect"
import { userStorageKey } from "../auth/authSettings"
import { MasterProvider } from "./masters/MasterProvider"
import { QuoteProvider } from "./quotes/QuoteProvider"
import { UserProvider } from "./users/UserProvider"
import "./Home.css"


export const Home = () => {
    const currentUser = sessionStorage.getItem(userStorageKey)
    console.log("the current user is", currentUser)

    return (
        <div className="home">
            {/* <h1>Welcome, Padawan Madison!</h1> */}
            <div className="mastersQuotes">
                <MasterProvider>
                    <UserProvider>
                        <QuoteProvider>
                            <MasterDetails />
                            <QuoteSelection />
                        </QuoteProvider>
                    </UserProvider>
                </MasterProvider>

            </div>
        </div>
    )
}
