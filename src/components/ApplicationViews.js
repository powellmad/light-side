import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { QuoteProvider } from "./quotes/QuoteProvider"
import { NoteProvider } from "./notes/NoteProvider"
import { NoteList } from "./notes/NoteList"
import { NoteForm } from "./notes/NoteForm"
import { MasterProvider } from "./masters/MasterProvider"
import { MasterSelect } from "./masters/MasterSelect"
import { UserProvider } from "./users/UserProvider"

export const ApplicationViews = () => {
    return (
        <>
            <QuoteProvider>
                <MasterProvider>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </MasterProvider>
            </QuoteProvider>

            <QuoteProvider>
                <NoteProvider>
                    <Route exact path="/notes">
                        <NoteList />
                    </Route>
                </NoteProvider>
            </QuoteProvider>

            <QuoteProvider>
                <NoteProvider>
                    <Route exact path="/quotes/:randomQuoteId(\d+)/notes/create">
                        {/* number indicator */}
                        <NoteForm />
                        <NoteList />
                    </Route>
                </NoteProvider>
            </QuoteProvider>

            <MasterProvider>
                <UserProvider>
                <Route path="/masters">
                    <MasterSelect />
                </Route>
                </UserProvider>
            </MasterProvider>
        </>
    )
}