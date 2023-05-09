import s from './Navbar.module.css';
import { useContext } from 'react';
import { NoteContext } from '../../Context/NoteContext';

const Navbar = () => {
  const note = useContext(NoteContext);

  console.log('note.lastNote', note.lastNote);
  return (
    <div className={s.navbar}>
      <button onClick={note.addNote}>add</button>
      <button onClick={() => note.deleteNotes(note.lastNote)}>delete</button>
    </div>
  );
};

export default Navbar;
