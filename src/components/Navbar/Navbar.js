import s from './Navbar.module.css';
import { useContext } from 'react';
import { NoteContext } from '../../Context/NoteContext';

const Navbar = () => {
  const note = useContext(NoteContext);


  return (
    <div className={s.navbar}>
      <button onClick={note.addNote}>add</button>
      <button onClick={() => note.deleteNotes(note.lastNote)}>delete</button>
      <button onClick={() => note.editNote()}>fix</button>
    </div>
  );
};

export default Navbar;
