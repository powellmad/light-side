import React, { useState, createContext } from "react"

export const NoteContext = createContext()

export const NoteProvider = (props) => {
    const [notes, setNotes] = useState([])
    
    const getNotes = () => {
        return fetch("http://localhost:8088/userNotes?_sort=timestamp&_expand=quote")
        .then(res => res.json())
        .then(setNotes)
    }

    const addNote = newNote => {
        return fetch("http://localhost:8088/userNotes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newNote)
        })
        .then(response => response.json())
    }

    const deleteNote = id => {
        return fetch(`http://localhost:8088/notes/${id}`, {
            method: "DELETE"
        })
        .then(getNotes)
    }

    return (
        <NoteContext.Provider value={{
            notes, getNotes, addNote, deleteNote
            }}>
                {props.children}
        </NoteContext.Provider>
    )
}