import React, { useContext, useEffect } from "react"
import { NoteContext } from "./NoteProvider"
import { NoteCard } from "./NoteCard"
import { useHistory } from "react-router-dom"
import "./Note.css"


export const NoteList = () => {
    const { notes, getNotes, deleteNote } = useContext(NoteContext)
    const history = useHistory()

    useEffect(() => {
        getNotes()
    }, [])

    const handleDelete = (id) => {
        console.log("this is the delete button", id)
        deleteNote(id)
        .then(() => {
            history.push("/notes")
        })
    }

    const UserDelete = (note) => (
                <button className="btn btn-primary" onClick={() => handleDelete(note.id)}> Delete </button>
            )    

    return (
        <div className="noteComponent">
            <h1>Padawan Notes</h1>
            <div className="note-list">
                {notes.map(note => {
                    return (
                        <div className="noteCard">
                            <NoteCard key={note.id} note={note} />
                            {UserDelete(note)}
                        </div>)
                })}
            </div>
        </div>
    )

}