const fs= require('fs');
fs.writeFile("output.txt","writing file",(err)=>{
  if(err) throw err;
  console.log("data written to the file")
}); 
console.log("I am Mr. Ashiwani Kumar");