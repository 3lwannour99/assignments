const fs  = require('fs')

// fs.writeFile('message.txt', "hello node js", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   }); 
// console.log("hi from node js")

fs.readFile('./message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.toUpperCase());
  });
  fs.readFile('./message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.charAt(7));
  });    
  fs.readFile('./message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.length);
  });  
  fs.readFile('./message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.repeat(5));
  });  
  fs.readFile('./message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.includes("hello"));
  });  