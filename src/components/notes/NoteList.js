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
        <button className="buttonStyle" onClick={() => handleDelete(note.id)}> Delete </button>
    )

    return (
        <div className="noteComponent ">
            {/* <div className="starwars-title">
            <div className="starwars-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            </div> */}

            <h1>Padawan Notes</h1>
            <div className="note-list">
                {notes.map(note => {
                    // If the useId on the notes array matching the current user id - display notes
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
                            <></>
                        )
                    }
                })}
            </div>
        </div>
    )

}