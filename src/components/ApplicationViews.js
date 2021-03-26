import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { QuoteProvider } from "./quotes/QuoteProvider"
import { NoteProvider } from "./notes/NoteProvider"
import { NoteList } from "./notes/NoteList"
import { NoteForm } from "./notes/NoteForm"
import { JediProvider } from "./jedi/JediProvider"
import { JediSelect } from "./jedi/JediSelect"
import { UserProvider } from "./users/UserProvider"

export const ApplicationViews = () => {
    return (
        <>
            {/* Home Page */}
            <QuoteProvider>
                <JediProvider>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </JediProvider>
            </QuoteProvider>

            {/* Route for Padawan Notes */}
            <QuoteProvider>
                <UserProvider>
                    <NoteProvider>
                        <Route exact path="/notes">
                            <NoteList />
                        </Route>
                    </NoteProvider>
                </UserProvider>
            </QuoteProvider>

            {/* Route to add a new note */}
            <QuoteProvider>
                <UserProvider>
                    <NoteProvider>
                        <Route exact path="/quotes/:randomQuoteId(\d+)/notes/create">
                            <NoteForm />
                            <NoteList />
                        </Route>
                    </NoteProvider>
                </UserProvider>
            </QuoteProvider>

            {/* Route to edit an existing note */}
            <QuoteProvider>
                <UserProvider>
                    <NoteProvider>
                        <Route exact path="/notes/edit/:noteId(\d+)">
                            <NoteForm />
                        </Route>
                    </NoteProvider>
                </UserProvider>
            </QuoteProvider>

            {/* When choose jedi is clicked, this list of jedi options are rendered*/}
            <JediProvider>
                <UserProvider>
                    <Route path="/jedi">
                        <JediSelect />
                    </Route>
                </UserProvider>
            </JediProvider>
        </>
    )
}