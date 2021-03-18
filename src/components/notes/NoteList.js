import React, { useContext, useEffect } from "react"
import { NoteContext } from "./NoteProvider"
import { NoteCard } from "./NoteCard"
import "./Note.css"

export const NoteList = () => {
    const { notes, getNotes } = useContext(NoteContext)

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <div className="noteComponent">
            <h1>Padawan Journal</h1>
            <div className="note-list">
                {notes.map(note => {
                    return <NoteCard key={note.id} note={note} />
                })}
            </div>
        </div>
    )
}