import React, { useState } from 'react';
import Notesadder from '../components/Notesadder';
import Popup from '../components/Popup';
import Sidebar from '../components/Sidebar';

function Notes() {
  const [storedData, setStoredData] = useState(null);
  const [selectedX, setSelectedX] = useState({ x: "", y: "" });

  const handleNoteSelection = ({ x, y }) => {
    setSelectedX({ x, y });
  };

  const handleFormSubmit = ({ groupName, selectedColor }) => {
    setStoredData({ groupName, selectedColor });
  };

  return (
    <div className='mainbody'>
      <Popup onFormSubmit={handleFormSubmit} />
      <Sidebar storedData={{ storedData }} onDataClick={handleNoteSelection} />
      <Notesadder selectedX={selectedX} />
    </div>
  );
}

export default Notes;
