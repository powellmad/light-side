import userEvent from "@testing-library/user-event"
import React from "react"
import { QuoteSelection } from "./quotes/QuoteSelection"
import { MasterDetail } from "./masters/MasterDetail"
import { userStorageKey } from "../auth/authSettings"
import "./Home.css"
import { MasterProvider } from "./masters/MasterProvider"
import { QuoteProvider } from "./quotes/QuoteProvider"
import { UserProvider } from "./users/UserProvider"


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
                            <MasterDetail />
                            <QuoteSelection />
                        </QuoteProvider>
                    </UserProvider>
                </MasterProvider>

            </div>
        </div>
    )
}
