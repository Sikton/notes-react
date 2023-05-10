import React, { useContext, useState } from 'react';
import { NoteContext } from '../../Context/NoteContext';

import ReactMarkdown from 'react-markdown';
import s from './Workspace.module.css';

const Workspace = () => {
  const note = useContext(NoteContext);

  const editNote = (e) => {
    note.onUpdateNote({
      ...note.findActiveNote(),
      [e.target.name]: e.target.value,
    });
  };

  if (!note.findActiveNote()) {
    return <div className={s.noActiveNote}>No Active Note</div>;
  }

  return (
    <div className={s.workspace}>
      {note.notes.title}
      <div className={s.main}>
        {note.isActive && (
          <div className={s.noteEdit}>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Note Title"
              onChange={editNote}
              autoFocus
            />
            <textarea
              id="body"
              name="body"
              placeholder="Write your note here..."
              value={note.findActiveNote().body}
              onChange={editNote}
            />
          </div>
        )}

        <div className={s.notePreview}>
          <h1 className="preview-title">{note.findActiveNote().title}</h1>
          <ReactMarkdown className="markdown-preview">
            {note.findActiveNote().body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
