const mongoose = require("mongoose");
const Chat = require("./models/chats");

main()
  .then((res) => {
    console.log("Connect with Mongodb.... ");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

Chat.insertMany([
  {
    from: "samir",
    to: "mahesh",
    msg: "hii mahesh",
    created_at: new Date(),
  },
  {
    from: "sairaj",
    to: "shrinath",
    msg: "send me old question papers",
    created_at: new Date(),
  },
  {
    from: "swapnil",
    to: "ajit",
    msg: "how are you?",
    created_at: new Date(),
  },
  {
    from: "pranav",
    to: "ayush",
    msg: "hii ayush",
    created_at: new Date(),
  },
  {
    from: "kunal",
    to: "aditya",
    msg: "hii aditya",
    created_at: new Date(),
  },
  {
    from: "suraj",
    to: "sanket",
    msg: "send me some money",
    created_at: new Date(),
  },
]);
