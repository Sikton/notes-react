import s from './Sidebar.module.css';
import { useContext, useState } from 'react';
import { NoteContext } from '../../Context/NoteContext';
import ListItem from './ListItem';

const Sidebar = () => {
  const note = useContext(NoteContext);

  const activNote = (id) => {
    note.changeActiveNote(id);
    console.log('id', id);
  };

  return (
    <div className={s.sidebar}>
      {note.notes &&
        note.notes.map((item) => (
          <ListItem activNote={activNote} key={item.id} item={item} />
        ))}
    </div>
  );
};

export default Sidebar;
