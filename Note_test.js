var note = require('./Note.js')

isWorking('first20 Method exists', typeof note.first20 === 'function')

// Conditional Comparison Method
function isWorking(testName, condition) {
  if (condition) {
    console.log(testName + ': ' + 'pass')}
  else {console.log(testName + ': '+ 'fail')};
};
