import React, { useContext, useEffect, useState } from "react"
import { NoteContext } from "./NoteProvider"
import { UserContext } from "../users/UserProvider"
import { NoteCard } from "./NoteCard"
import { useHistory } from "react-router-dom"
import "./Note.css"

export const NoteList = () => {
    const { getUserById } = useContext(UserContext)
    const { notes, getNotes, deleteNote } = useContext(NoteContext)
    const [userObject, setUserObject] = useState({})

    const currentUser = parseInt(sessionStorage.getItem("app_user_id"))
    const history = useHistory()

    useEffect(() => {
        getUserById(currentUser)
            .then(setUserObject)
            .then(getNotes)
    }, [])

    const handleDelete = (id) => {
        // console.log("this is the delete button", id)
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
                    if (note.userId === userObject.id) {
                        return (
                            <div className="noteCard">
                                <NoteCard key={note.id} note={note} />
                                {UserDelete(note)}
                                <button onClick={() => {
                                    history.push(`/notes/edit/${note.id}`)
                                }}>Edit</button>
                            </div>)
                    } else {
                        return (
                            <div></div>
                        )
                    }
                })}
            </div>
        </div>
    )

}