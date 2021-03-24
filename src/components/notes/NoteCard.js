import React from "react"

export const NoteCard = ({ note }) => (
    <section className="note__{note.id}">
        <div className="note__head">
            <h4 className="note__quote">"{note.quote?.mastertext}"</h4>
            <div className="note__timestamp">{note.timestamp}</div>
        </div>
        <div className="note__text">{note.text}</div>
    </section>
)
