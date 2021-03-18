import React, { useContext, useEffect, useState } from "react"
import { NoteContext } from "./NoteProvider"
import { useHistory } from 'react-router-dom'
import "./Note.css"

export const NoteForm = () => {
    const { addNote, getNotes } = useContext(NoteContext)

    const timestamp = new Date().toLocaleString()
    const currentUser = parseInt(sessionStorage.getItem("app_user_id "))

    const [note, setNote] = useState({
        "id": "",
        "text": "",
        "timestamp": timestamp,
        // "quoteId": selectedQuote,
        "userId": currentUser
    })

    const history = useHistory();
    useEffect(() => {
        getNotes()
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
                // quoteId: note.quoteId,
                userId: note.userId
            })
                .then(() => history.push("/notes"))
        }
    }


    return (
        <form className="noteForm">
            <h2>Create Note:</h2>
            <div>"Quote"</div>
            <fieldset>
                <div className="form-group">
                    <textarea name="text" id="text" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="New Note" value={note.text}></textarea>
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveNote}>
                Save Note
            </button>
        </form>
    )
}
