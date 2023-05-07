import React, { useContext, useState } from 'react';
import { NoteContext } from '../../Context/NoteContext';

import ReactMarkdown from 'react-markdown';
import s from './Workspace.module.css';

const Workspace = () => {
  const note = useContext(NoteContext);
  console.log('note', note.notes);

  const handleFieldChange = (e) => {
    note.setNotes([
      ...note.notes,
        { [e.target.name]: e.target.value }
     
    ]);
  };

  return (
    <div className={s.workspace}>
      {note.notes.title}
      <div className={s.main}>
        <div className={s.noteEdit}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Note Title"
            value={note.notes.title}
            onChange={handleFieldChange}
            autoFocus
          />
          <textarea
            id="body"
            name="body"
            placeholder="Write your note here..."
            value={note.notes.body}
            onChange={handleFieldChange}
          />
        </div>
        <div className={s.notePreview}>
          <h1 className="preview-title">Tite</h1>
          <ReactMarkdown className="markdown-preview">body</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
