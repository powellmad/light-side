import React, { useContext, useEffect, useState } from "react"
import { NoteContext } from "./NoteProvider"
import { QuoteContext } from "../quotes/QuoteProvider"
import { useHistory, useParams } from 'react-router-dom'
import "./Note.css"

export const NoteForm = () => {
    const { addNote, getNotes } = useContext(NoteContext)
    const { quoteById, getQuoteById } = useContext(QuoteContext)

    const timestamp = new Date().toLocaleString()
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"))

    const {randomQuoteId} = useParams()

    const [note, setNote] = useState({
        "id": "",
        "text": "",
        "timestamp": timestamp,
        "quoteId": randomQuoteId,
        "userId": currentUser
    })

    const history = useHistory();
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


    return (
        <form className="noteForm">
            <h2>Create Note:</h2>
            <p>"{quoteById.jeditext}"</p>
            <fieldset>
                <div className="form-group">
                    <textarea name="text" id="text" cols="100" rows="5" onChange={handleControlledInputChange} required autoFocus className="form-control" value={note.text}></textarea>
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveNote}>
                Save Note
            </button>
        </form>
    )
}
