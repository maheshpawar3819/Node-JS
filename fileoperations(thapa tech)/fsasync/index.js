const { error } = require("console");
const fs=require("fs");

// fs.writeFile("Data.txt","This file contain some data :",(error) => {
//     console.log("file is created successfully");
//     // console.log(error)
// })

// fs.appendFile("Data.txt","\n Hii my name is mahi",(error) => {
//     console.log("add data ");
// })

fs.readFile("Data.txt","utf-8",(error,data) => {
    console.log(data);
    console.log(error);
})