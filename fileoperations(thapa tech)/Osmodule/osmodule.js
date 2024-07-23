const os=require("os");

// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.endianness());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.loadavg());
// console.log(os.machine());
// console.log(os.networkInterfaces());
// console.log(os.version());
console.log(os.platform())
console.log(os.type())
//check how many bits free on memory

const freememory=os.freemem();
console.log(`${freememory/1024/1024/1204}`);

const totalmemeory=os.totalmem();
console.log(`${totalmemeory/1024/1024/1204}`);