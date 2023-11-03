import React, { useState, useEffect } from "react";
import "../css/sidebar.css";
function Sidebar({ onDataClick ,togglepop }) {
  const [allInfoObjects, setAllInfoObjects] = useState([]);

  
  useEffect(() => {
    const storedNotesInfo = JSON.parse(localStorage.getItem("NotesInfo")) || {};
    console.log("Stored Notes Info:", storedNotesInfo); // Debugging statement
    const infoArray = Object.values(storedNotesInfo);
    setAllInfoObjects(infoArray);
  }, []);
  
  const popupbody = document.querySelector('.noteaddermainbody'); //enable notesadder
  const sideb = document.querySelector('.Sidebarmain'); //disable sidebar notesadder
  
  const handlenotesadder = (info) =>{
    let x = info.infogn.groupName;
    const y = info.infogn.selectedColor;
    console.log(`This is x : ${x}`);

    onDataClick({x,y});
    sideb.style.display = 'none';
    popupbody.style.display = 'flex';
    
  }

  const popupopener = () => {
    togglepop();
   /*  const popupbody = document.querySelector(".popupbody");
    popupbody.classList.remove("active-modal"); */
  };

  return (
    <div className="Sidebarmain">
      <div className="notesInfolist0">
        <h1>Pocket Notes</h1>
        <button onClick={popupopener}> + &emsp; Create Notes group</button>
      </div>
      <div>
        {allInfoObjects.map((info, index) => (
          <div key={index}>
            <div className="notesInfolist" onClick={() => handlenotesadder(info)}>
              <div className="initials" style={{backgroundColor:`${info.infogn.selectedColor}`}}> {info.infogn.groupName.slice(0, 2).toUpperCase()}</div>
              <div className="initialsff">{info.infogn.groupName}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
