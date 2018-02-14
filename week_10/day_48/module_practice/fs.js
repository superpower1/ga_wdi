// argv stands for argument vector, it will return an array of arguments
const filepath = process.argv[2]
console.log(filepath);

const fs = require('fs');

fs.readFile(filepath, (err,buffer)=>{
  const lines = buffer.toString().split('\n');
  console.log(lines.length);
});
