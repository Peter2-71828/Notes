var list = require('./NoteList.js');

isWorking('addNote method exists', typeof list.viewNote === 'function')

isWorking('viewNote method exists', typeof list.viewNote === 'function')

// Conditional Comparison Method
function isWorking(testName, condition) {
  if (condition) {
    console.log(testName + ': ' + 'pass')}
  else {console.log(testName + ': '+ 'fail')};
};
