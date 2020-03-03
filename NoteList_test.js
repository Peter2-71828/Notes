var list = require('./NoteList.js');

if (typeof list === 'object') {
  console.log('pass')}
else {console.log('fail')};

if (typeof list.viewNote === 'function') {
  console.log('pass')}
else {console.log('fail')};
