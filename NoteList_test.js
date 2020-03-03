var list = require('./NoteList.js');

if (typeof list.addNote === 'function') {
  console.log('pass')}
else {console.log('fail')};

if (typeof list.viewNote === 'function') {
  console.log('pass')}
else {console.log('fail')};
