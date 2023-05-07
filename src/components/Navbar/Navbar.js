import s from './Navbar.module.css';
import { useContext, useState } from 'react';
import { NoteContext } from '../../Context/NoteContext';

const Navbar = () => {
  const note = useContext(NoteContext);
  return (
    <div className={s.navbar}>
      <button onClick={note.addNote}>add</button>
    </div>
  );
}

export default Navbar