const { error } = require("console");
const fs=require("fs");

// fs.writeFile("data.txt","this file contain data",(error) => {
//     console.log("file is created");
// } )

fs.appendFile("data.txt","hello my name is mahi..",(error) => {
    console.log("data added");
})

