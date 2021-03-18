import React from "react"

export const NoteCard = ({ note }) => (
    <section className="note__{note.id}">
        <div className="note__quote">{note?.quote}</div>
        <div className="note__timestamp">Date: {note?.timestamp}</div>
        <div className="note__text">{note?.text}</div>
    </section>
)
