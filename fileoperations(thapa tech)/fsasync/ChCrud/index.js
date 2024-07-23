const { error } = require("console");
const fs=require("fs");

// fs.mkdir("Thapa",(error) => {
//     console.log("folder was created");
// })

// fs.writeFile("./Thapa/bio.txt","this file contain some data",(error) => {
//     console.log("file is create");
// })

// fs.appendFile("./Thapa/bio.txt","\n Mahesh,Sneha,Shiv,Devansh,Vaishnavi",(error) => {
//     console.log("add deta into the file");
// })

// const readdata=fs.readFile("./Thapa/bio.txt","utf-8",(error,data) => {
//     console.log(data);
// })

// fs.rename("./Thapa/bio.txt","./Thapa/mybio.txt",(error) => {
//     console.log("rename the file");
// })

// fs.unlink("./Thapa/mybio.txt",(error) => {
//     console.log("file was deleted");
// })

fs.rmdir("Thapa",(error) => {
    console.log("delete the folder");
})