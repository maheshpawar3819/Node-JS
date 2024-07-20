let fs = require("fs");

// fs.writeFileSync("note.txt","this is my first file creation operation");

// fs.writeFileSync("note.txt","try to try to modify text");

// fs.writeFileSync("note.txt","how are you mahesh");

// fs.appendFileSync("note.txt" , "\n I am fine :)")

//read file

let buf_data = fs.readFileSync("note.txt");
console.log(buf_data);
// output : <Buffer 68 6f 77 20 61 72 65 20 79 6f 75 20 6d 61 68 65 73 68 0a 20 49 20 61 6d 20 66 69 6e 65 20 3a 29>
//node js includes additonal data type name is Buffer
//not available on browser (js)
//buffer mainly use to store binary data
