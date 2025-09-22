const fs = require('fs');

console.log('1. Start the scripting');

//Synchronous (blocking operations)
console.log('2. Reading file synchronously');

const dataSync=fs.readFileSync('userFile.txt','utf-8');
console.log('3. Synchronus read complete');

//Asyncronus Operation

console.log('4. Reading file asynchronously');
fs.readFile('userdetail.txt','utf-s',error=>{
  if(err) throw err;
  console.log('5. Asynchronous read complete');
});

console.log('6. end of script');