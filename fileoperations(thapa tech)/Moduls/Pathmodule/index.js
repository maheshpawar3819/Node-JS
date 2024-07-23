const path=require("path");

// console.log(path.dirname("D:/Jan Batch/Node/Node-JS/fileoperations(thapa tech)/Moduls/Pathmodule/index.js"))
// console.log(path.extname("D:/Jan Batch/Node/Node-JS/fileoperations(thapa tech)/Moduls/Pathmodule/index.js"))
// console.log(path.basename("D:/Jan Batch/Node/Node-JS/fileoperations(thapa tech)/Moduls/Pathmodule/index.js"))
const get=path.parse("D:/Jan Batch/Node/Node-JS/fileoperations(thapa tech)/Moduls/Pathmodule/index.js");

console.log(get.name)
console.log(get.root)
console.log(get.ext)
console.log(get.dir)

