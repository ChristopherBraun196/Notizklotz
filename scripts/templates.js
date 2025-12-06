function getNoteTemplate(indexNote) {
  return `
    <article class="note-card">
      <div class="note-text">
        <h3 class="note-title">${notesTitles[indexNote]}</h3>
        <p class="note-body">${notes[indexNote]}</p>
      </div>
      <div class="note-actions">
        <button class="btn btn-secondary" onclick="archiveNote(${indexNote})">A</button>
        <button class="btn btn-danger" onclick="deleteNote(${indexNote})">X</button>
      </div>
    </article>`;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `
    <article class="note-card">
      <div class="note-text">
        <h3 class="note-title">${trashNotesTitles[indexTrashNote]}</h3>
        <p class="note-body">${trashNotes[indexTrashNote]}</p>
      </div>
      <div class="note-actions">
        <button class="btn btn-secondary" onclick="restoreFromDelete(${indexTrashNote})">B</button>
        <button class="btn btn-danger" onclick="deleteTrashNote(${indexTrashNote})">X</button>
      </div>
    </article>`;
}
function getArchivNoteTemplate(indexArchivNote) {
  return `
    <article class="note-card">
      <div class="note-text">
        <h3 class="note-title">${archiveNotesTitles[indexArchivNote]}</h3>
        <p class="note-body">${archiveNotes[indexArchivNote]}</p>
      </div>
      <div class="note-actions">
        <button class="btn btn-secondary" onclick="restoreFromArchive(${indexArchivNote})">B</button>
        <button class="btn btn-danger" onclick="deleteArchivNote(${indexArchivNote})">X</button>
      </div>
    </article>`;
}
