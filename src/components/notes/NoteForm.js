import React, { useContext, useEffect, useState } from "react"
import { NoteContext } from "./NoteProvider"
import { QuoteContext } from "../quotes/QuoteProvider"
import { useHistory, useParams } from 'react-router-dom'
import "./Note.css"

export const NoteForm = () => {
    const {  getNotes, getNoteById, addNote, updateNote } = useContext(NoteContext)
    const { getQuotes, quoteById, getQuoteById } = useContext(QuoteContext)

    const timestamp = new Date().toLocaleString()
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"))
    const history = useHistory()

    // useParams - values set dynamically in url
    const { randomQuoteId } = useParams()
    const { noteId } = useParams()

    // a state variable is set with empty placeholder values for inputs
    const [note, setNote] = useState({
        "id": "",
        "text": "",
        "timestamp": timestamp,
        "quoteId": randomQuoteId,
        "userId": currentUser
    })
    
    const [isLoading, setIsLoading] = useState(true);

    // fetches info for the single quote selected in the randomizer to get access to the quote text.
    useEffect(() => {
        getNotes()
            .then(getQuoteById(randomQuoteId))
    }, [])

    const handleControlledInputChange = (event) => {
        const newNote = { ...note }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newNote[event.target.id] = selectedVal
        setNote(newNote)
    }

    const handleClickSaveNote = (event) => {
        event.preventDefault()
        if (note.text === "") {
            window.alert("Please create a note")
        } else {
            setIsLoading(true);
            {
                noteId ?
                    updateNote({
                        id: note.id,
                        text: note.text,
                        timestamp: note.timestamp,
                        quoteId: note.quoteId,
                        userId: note.userId
                    })
                        .then(() => history.push(`/notes`))
                    :
                    addNote({
                        id: note.id,
                        text: note.text,
                        timestamp: note.timestamp,
                        quoteId: note.quoteId,
                        userId: note.userId
                    })
                        .then(() => history.push("/notes"))
            }
        }
    }

    
    useEffect(() => {
        getQuoteById(randomQuoteId).then(() => {
            if (noteId) {
                getNoteById(noteId)
                    .then(note => {
                        setNote(note)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    return (
        // if note exists (has an id) the form is for edit
        <form className="noteForm">
            <h2>{noteId ? "Edit Note" : "Create Note"}</h2>
            <p>"{noteId ? note.quote?.jeditext : quoteById.jeditext}"</p>
            <fieldset>
                <div className="form-group">
                    <textarea name="text" id="text" cols="90" rows="5" onChange={handleControlledInputChange} required autoFocus className="form-control" value={note.text}></textarea>
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveNote}>
                Save Note
          </button>
        </form>
    )
}
