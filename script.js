// notizen anzeigen lassen
// ich brauche notizen
let notes = ["banana", "rasen mähen"];

function renderNotes() {
  // ich muss definieren wo sie anzuzeigen sind
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    const note = notes[indexNote];
    contentRef.innerHTML += getNoteTemplate (note);
  }
}

function getNoteTemplate(note){
    return  `<p>+ ${note}</p>`
}

// notizen hinzufügen

function addNote(){
    let noteInputRef = document.getElementById('note_input')
    let noteInput = noteInputRef.value; 

    notes.push(noteInput);

    renderNotes();

    noteInputRef.value = "";
}

// eingabe von User definieren 
// eingabe auslesen
// eingabe speichern 
// eingabe anzeigen lassen




// notizen löschen
//  -> notizen archivieren
