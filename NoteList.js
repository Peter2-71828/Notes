
var Note = require('./Note.js');

function NoteList() {
  this.notes = [];
};

NoteList.prototype.addNote = function(noteName, note) {
  var new_note = new Note(noteName, note);
  this.notes.push(new_note);
};

NoteList.prototype.viewNotes = function() {
  return(this.notes[0].name);
};

var list = new NoteList();

module.exports = list;
