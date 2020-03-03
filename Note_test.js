var note = require('./Note.js')

if (typeof note === 'object') {
  console.log('pass')}
else {console.log('fail')};

if (typeof note.first20 === 'function') {
  console.log('pass')}
else {console.log('fail')};
