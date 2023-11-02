import React, { useState, useEffect } from "react";
import "../css/noteadder.css"
const Notesadder = ({selectedX}) => {
  const [note, setNote] = useState("");     //single note
  const [notes, setNotes] = useState([]);   //array
  
  console.log(selectedX.y);
  const key = selectedX.x;
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (note.trim() !== "") {
      const currentDate = new Date();
      const timestamp = currentDate.toLocaleString();
      const newNote = { text: note, timestamp: timestamp };     //make a format of how the data appears on storage
      // Save the note in local storage
      const storedNotesInfo = JSON.parse(localStorage.getItem("NotesInfo")) || [];    //fetch the array of notes in storedNotes
      if (!storedNotesInfo[key]) {
        storedNotesInfo[key] = { infogn: {}, notesgn: [] };
      }
      storedNotesInfo[key].notesgn.push(newNote);
      //storedNotesInfo.push(newNoteInfo);                                              //push the new element in storenotes [1,2,3, .. ..]
      localStorage.setItem("NotesInfo", JSON.stringify(storedNotesInfo));             //store the array back to the localstorage


      setNotes([...notes, newNote]);
      setNote("");
    }
  };

  // Load existing notes from local storage on component mount
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  return (
    <div className="noteaddermainbody">
      <div className="notesadder">
        <h1>Take a Note</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {notes.map((note, index) => (
          <div key={index}>
            {note.timestamp}: {note.text}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Notesadder;
