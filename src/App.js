import './App.css';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Sidebar from './components/Sidebar/Sidebar';
import Workspace from './components/Workspace/Workspace';
import { NoteContext } from './Context/NoteContext';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [notes, setNotes] = useState([]);
  const [lastNote, setLastNote] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      title: 'Title',
      body: '',
      date: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setLastNote(newNote.id);
    setIsActive(true);
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const onUpdateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotes);
  };

  const changeActiveNote = (id) => {
    console.log('tets');
    setLastNote(id);
    setIsActive(false);
  };

  const deleteNotes = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const editNote = () => {
    setIsActive(true);
  };

  const findActiveNote = () => {
    return notes.find(({ id }) => id === lastNote);
  };

  return (
    <div className="container">
      <NoteContext.Provider
        value={{
          notes,
          setNotes,
          setLastNote,
          lastNote,
          addNote,
          onUpdateNote,
          findActiveNote,
          deleteNotes,
          isActive,
          editNote,
          changeActiveNote,
        }}
      >
        <Navbar />
        <div className="mainspace">
          <Sidebar />
          <Workspace />
        </div>
      </NoteContext.Provider>
    </div>
  );
}

export default App;
