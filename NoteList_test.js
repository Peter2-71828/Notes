var list = require('./NoteList.js');

list.addNote('test', 'this is a test note');

isWorking('addNote method should add note to list', list.viewNotes() == 'test')

// Conditional Comparison Method
function isWorking(testName, condition) {
  if (condition) {console.log(testName + ': ' + 'pass')}
  else {console.log(testName + ': '+ 'fail')};
};
