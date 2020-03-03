var Note = require('../models/Note.js')

note = new Note('test', 'this is a test it needs to be longer than 20 characters');

isWorking('first20 Method exists', typeof note.first20 === 'function')

isWorking('first20 method should return first 20 characters', note.first20() == 'this is a test it ne')

// Conditional Comparison Method
function isWorking(testName, condition) {
  if (condition) {console.log(testName + ': ' + 'pass')}
  else {console.log(testName + ': '+ 'fail')};
};
