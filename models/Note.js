function Note(noteName, note) {
  this.name = noteName;
  this.note = note;
};

Note.prototype.first20 = function() {
return(this.note.substring(0,20));
};

module.exports = Note;
