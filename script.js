let notesTitles = [];
let notes = [];

let trashNotesTitles = [];
let trashNotes = [];

let archiveNotesTitles = [];
let archiveNotes = [];

function init() {
  loadFromLocalStorage();

  renderNotes();
  renderTrashNotes();
  renderArchivNotes();
}

// render function

function renderNotes() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderTrashNotes() {
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

function renderArchivNotes() {
  let archivContentRef = document.getElementById("archiv_content");
  archivContentRef.innerHTML = "";

  for (
    let indexArchivNote = 0;
    indexArchivNote < archiveNotes.length;
    indexArchivNote++
  ) {
    archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
  }
}

function restoreFromArchive(indexArchivNote) {
  let restoredNote = archiveNotes.splice(indexArchivNote, 1)[0];
  notes.push(restoredNote);

  let restoredTitle = archiveNotesTitles.splice(indexArchivNote,1)[0];
  notesTitles.push(restoredTitle);

  renderNotes();
  renderArchivNotes();
  saveToLocalStorage();
}

function deleteArchivNote(indexArchivNote) {

  let trashNote = archiveNotes.splice(indexArchivNote, 1)[0];
  trashNotes.push(trashNote);

  let trashTitle = archiveNotesTitles.splice(indexArchivNote, 1)[0];
  trashNotesTitles.push(trashTitle);

  renderArchivNotes();
  renderTrashNotes();
  saveToLocalStorage();
}

// add Note

function addNote() {
  let noteTitleRef = document.getElementById("note_title");
  let noteTextRef = document.getElementById("note_text");

  let noteTitle = noteTitleRef.value.trim();
  let noteText = noteTextRef.value.trim();

  if (noteText === "") {
    return;
  }

  if (noteTitle === "") {
    noteTitle = "Aufgabe " + (notes.length + 1);
  }

  notesTitles.push(noteTitle);
  notes.push(noteText);

  renderNotes();
  saveToLocalStorage();

  noteTitleRef.value = "";
  noteTextRef.value = "";
}

// delete & Trash

function deleteNote(indexNote) {
  let trashNote = notes.splice(indexNote, 1)[0];
  trashNotes.push(trashNote);

  let trashNotesTitle = notesTitles.splice(indexNote, 1)[0];
  trashNotesTitles.push(trashNotesTitle);

  renderNotes();
  renderTrashNotes();
  saveToLocalStorage();
}

function deleteTrashNote(indexTrashNote) {
  trashNotes.splice(indexTrashNote, 1);
  trashNotesTitles.splice(indexTrashNote, 1);
  renderTrashNotes();
  saveToLocalStorage();
}

function restoreFromDelete(indexDeleteNote) {
  let restoredNote = trashNotes.splice(indexDeleteNote, 1)[0];
  notes.push(restoredNote);

  let restoredTitle = trashNotesTitles.splice(indexDeleteNote, 1)[0];
  notesTitles.push(restoredTitle);

  renderNotes();
  renderTrashNotes();
  saveToLocalStorage();
}

// archive

function archiveNote(indexNote) {
  let archiveNoteText = notes.splice(indexNote, 1)[0];
  archiveNotes.push(archiveNoteText);

  let archivedTitle = notesTitles.splice(indexNote, 1)[0];
  archiveNotesTitles.push(archivedTitle);

  renderNotes();
  renderArchivNotes();
  saveToLocalStorage();
}

// LocalStorage

function saveToLocalStorage() {
  const data = {
    notes,
    notesTitles,
    trashNotes,
    trashNotesTitles,
    archiveNotes,
    archiveNotesTitles,
  };

  localStorage.setItem("notesAppData", JSON.stringify(data));
}

function loadFromLocalStorage() {
  let stored = JSON.parse(localStorage.getItem("notesAppData"));

  if (!stored) {
    return;
  }

  notes = stored.notes || [];
  notesTitles = stored.notesTitles || [];
  trashNotes = stored.trashNotes || [];
  trashNotesTitles = stored.trashNotesTitles || [];
  archiveNotes = stored.archiveNotes || [];
  archiveNotesTitles = stored.archiveNotesTitles || [];
}
