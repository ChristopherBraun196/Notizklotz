// notizen anzeigen lassen
// ich brauche notizen
let notes = ["banana", "rasen mähen"];

let trashNotes = [];

function renderNotes() {
  // ich muss definieren wo sie anzuzeigen sind
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}
function getNoteTemplate(indexNote) {
  return `<p>+ ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">X</button></p>`;
}

function renderTrashNotes() {
  // ich muss definieren wo sie anzuzeigen sind
  let trashContentRef = document.getElementById("trash_content");
  trashContentRef.innerHTML = "";

  for (
    let indexTrashNote = 0;
    indexTrashNote < trashNotes.length;
    indexTrashNote++
  ) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
}

function getTrashNoteTemplate(indexTrashNote) {
  return `<p>+ ${trashNotes[indexTrashNote]}<button onclick="deleteTrashNote(${indexTrashNote})">X</button></p>`;
}
// notizen hinzufügen

function addNote() {
  let noteInputRef = document.getElementById("note_input");
  let noteInput = noteInputRef.value;

  notes.push(noteInput);

  renderNotes();

  noteInputRef.value = "";
}

function deleteNote(indexNote) {
  let trashNote = notes.splice(indexNote, 1)[0];
  trashNotes.push(trashNote);
  renderNotes();
  renderTrashNotes();
}

function deleteTrashNote(indexTrashNote){
  trashNotes.splice(indexTrashNote, 1);
  renderTrashNotes();
}
