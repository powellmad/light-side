import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { QuoteProvider } from "./quotes/QuoteProvider"
import { NoteProvider } from "./notes/NoteProvider"
import { NoteList } from "./notes/NoteList"
import { NoteForm } from "./notes/NoteForm"


export const ApplicationViews = () => {
    return (
        <>
            <QuoteProvider>
                <Route exact path="/">
                    <Home />
                </Route>
            </QuoteProvider>
            <NoteProvider>
                <Route exact path="/notes/create">
                    <NoteForm />
                    <NoteList />
                </Route>
            </NoteProvider>
            <NoteProvider>
                <Route exact path="/notes">
                    <NoteList />
                </Route>
            </NoteProvider>
        </>
    )
}