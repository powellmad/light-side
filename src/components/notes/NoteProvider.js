import React, { useState, createContext } from "react"

export const NoteContext = createContext()

export const NoteProvider = (props) => {
    const [notes, setNotes] = useState([])
    
    const getNotes = () => {
        return fetch(`http://localhost:8088/userNotes`)
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

    return (
        <NoteContext.Provider value={{
            notes, getNotes, addNote
            }}>
                {props.children}
        </NoteContext.Provider>
    )
}