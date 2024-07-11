// Process : This Object provides information about, and control over, the current Node.js process

// process.argv : returns the array containing the command-line arguments passed when the Node.js process was launched.

// console.log(process.argv) 

let args=process.argv

for(let i=2;i<args.length;i++){
    console.log("Hello",args[i]);
}