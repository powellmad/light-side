import React from "react"

export const NoteCard = ({ note }) => (
    <section className="noteCard note__{note.id}">
            <div className="note__quote">{note.quote?.mastertext}</div>
            <div className="note__timestamp">{note.timestamp}</div>
            <div className="note__text">{note.text}</div>
    </section>
)
