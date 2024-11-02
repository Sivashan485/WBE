// a callback is blocking the event loop
// consequently, another timer’s callback is delayed

const fs = require('fs')

//  store current timestamp
const timeoutScheduled = Date.now()

// register timer with 100ms delay
// callback logs time passed
setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`${delay}ms have passed since I was scheduled`)
}, 100)

// another async operation, e.g. an I/O operation
// needs 95ms then callback is invoked
function someAsyncOperation (callback) {
  // assume this takes 95ms to complete
  // fs.readFile('/path/to/file', callback)
  
  // simulated:
  setTimeout(callback, 95)
}

// start someAsyncOperation that will take 95 ms to complete
// callback then blocks event loop for 10ms
someAsyncOperation(() => {
  const startCallback = Date.now()
  
  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
})
