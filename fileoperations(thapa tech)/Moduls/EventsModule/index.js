//Events Module
//Node.js has a build in module ,called "Events"
//where you can create- , fire -, and listen for - your own events 

//Ex : Registrating for the event to be fired only one time using once

const EventEmitter=require("events");

const event=new EventEmitter();

// Createating my own event 

event.on("sayMyName",() => {
    console.log("My name is Mahesh");
})

event.emit("sayMyName");
