// module.export : a special object (contain all things 1 file send to another file)

// require() : a bulid in function to include external modules that exist in saperate files.

let get = require("./Fruits");
const { color } = require("./Fruits/apple");

console.log(get);
console.log(get[0].fruit, color);
// console.log(get.Pi)
// console.log(get.sum(5,5))

// console.log(get);
