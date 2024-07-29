//Events Module
//Node.js has a build in module ,called "Events"
//where you can create- , fire -, and listen for - your own events 

//Ex : Registrating for the event to be fired only one time using once
//Ex 2 : Create an event emmiter instance and register a couple of callbacks 
//Ex 3 : Registaring for a event with callback parameters

const EventEmitter=require("events");

const event=new EventEmitter();

// Createating my own event 

// event.on("sayMyName",() => {
//     console.log("My name is Mahesh");
// })

// event.on("sayMyName",() => {
//     console.log("My name is Sanket");
// })

// event.on("sayMyName",() => {
//     console.log("My name is suraj")
// })

// Ex 3 : 

event.on("checkPage",(status,msg) => {
    console.log(`Status code is ${status} and page is ${msg}`);
})

// event.emit("sayMyName");
event.emit("checkPage",200,"ok");


