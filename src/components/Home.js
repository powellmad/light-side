import React from "react"
import { userStorageKey } from "../auth/authSettings"
import { QuoteProvider } from "./quotes/QuoteProvider"
import { QuoteSelection } from "./quotes/QuoteSelection"
import { UserProvider } from "./users/UserProvider"
import { JediProvider } from "./jedi/JediProvider"
import { JediDetail } from "./jedi/JediDetail"
import "./Home.css"


export const Home = () => {
    const currentUser = sessionStorage.getItem(userStorageKey)
    // console.log("the current user is", currentUser)

// on the homepage, the user sees their selected Jedi Master and a randomized motivational quote
    return (
        <div className="home">
            <div className="jediQuotes">
                <JediProvider>
                    <UserProvider>
                        <QuoteProvider>
                            <JediDetail />
                            <QuoteSelection />
                        </QuoteProvider>
                    </UserProvider>
                </JediProvider>
            </div>
        </div>
    )
}
