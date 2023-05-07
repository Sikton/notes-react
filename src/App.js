import './App.css';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Sidebar from './components/Sidebar/Sidebar';
import Workspace from './components/Workspace/Workspace';
import { NoteContext } from './Context/NoteContext';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'rr', body: 'raketa9' },
    { id: 2, title: 'con', body: 'okolo2' },
    { id: 3, title: 'boom3', body: 'boomda3' },
    { id: 4, title: 'solo4', body: 'solovan4' },
  ]);

  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      title: '',
      body: '',
    };

    console.log('notes-okk-1', notes);
    setNotes([newNote, ...notes]);
  };
  console.log('notes-okk-2', notes);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  return (
    <div className="container">
      <NoteContext.Provider
        // value={{ notes, selectedNote, updateNote, addNote }}
        value={{ notes, setNotes, addNote }}
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
