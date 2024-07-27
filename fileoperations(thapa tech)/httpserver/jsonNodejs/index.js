const fs=require("fs");
const { json } = require("node:stream/consumers");

const bioData = {
  name: "Mahesh",
  age: 23,
  channel: "MahechTech",
};

// // convert the biodata into the Json format
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
// // {"name":"Mahesh","age":23,"channel":"MahechTech"}

// //conver this json deta again in object
// const objData = JSON.parse(jsonData);
// console.log(objData);
// // { name: 'Mahesh', age: 23, channel: 'MahechTech' }

/*
Task :
        1.convert this data into json
        2.add into the another file
        3.readfile
        4.again convert back to js obj
        5.show on console.log();
*/

const jsonData=JSON.stringify(bioData);

fs.writeFile("json1.json",jsonData,(err) => {
    console.log("data was add");
} )

fs.readFile("json1.json","utf-8",(error,data) => {
    const objData=JSON.parse(data);
    console.log(objData);
})

