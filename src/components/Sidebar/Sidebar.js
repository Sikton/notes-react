import s from './Sidebar.module.css';
import { useContext, useState } from 'react';
import { NoteContext } from '../../Context/NoteContext';

const Sidebar = () => {
  const note = useContext(NoteContext);
  console.log('notessite', note);
  return (
    <div className={s.sidebar}>
      sidebar
      {note.notes &&
        note.notes.map((el) => (
          <ul>
            <li>{el.title}</li>
            <li>{el.body}</li>
          </ul>
        ))}
    </div>
  );
};

export default Sidebar;
