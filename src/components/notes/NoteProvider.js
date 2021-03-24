import React, { useState, createContext } from "react"

export const NoteContext = createContext()

export const NoteProvider = (props) => {
    const [notes, setNotes] = useState([])
    
    const getNotes = () => {
        return fetch("http://localhost:8088/userNotes?_sort=timestamp&_expand=quote")
        .then(res => res.json())
        .then(setNotes)
    }

    const getNoteById = (id) => {
        return fetch(`http://localhost:8088/userNotes/${id}?_expand=quote`)
        .then(res => res.json())
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
        return fetch(`http://localhost:8088/userNotes/${id}`, {
            method: "DELETE"
        })
        .then(getNotes)
    }

    const updateNote = note => {
        return fetch(`http://localhost:8088/userNotes/${note.id}?_expand=quote`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(note)
        })
        .then((res) => res.json())
        .then((result) => setNotes(result))
          .then(getNotes)
      }

    return (
        <NoteContext.Provider value={{
            notes, getNotes, getNoteById, addNote, deleteNote, updateNote
            }}>
                {props.children}
        </NoteContext.Provider>
    )
}