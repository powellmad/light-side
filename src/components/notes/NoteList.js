import React, { useContext, useEffect } from "react"
import { NoteContext } from "./NoteProvider"
import { useHistory } from "react-router-dom"
import { NoteCard } from "./NoteCard"
import "./Note.css"

export const NoteList = () => {
    const { notes, getNotes } = useContext(NoteContext)
    const history = useHistory()

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <div className="noteComponent">
            <h3>Notes:</h3>
            <div className="note-list">
                {notes.map(note => {
                    return <NoteCard key={note.id} note={note} />
                })}
            </div>
            <button onClick={() => { history.push("/") }}>
                Next Quote
        </button>
        </div>
    )
}