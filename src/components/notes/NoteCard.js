import React from "react"

export const NoteCard = ({ note }) => (
    <section className="noteCard note__{note.id}">
        <div className="noteCard__text">
            <div className="note__quote">{note.quoteId}</div>
            <div className="note__timestamp">{note.timestamp}</div>
            <div className="note__text">{note.text}</div>
        </div>
    </section>
)
