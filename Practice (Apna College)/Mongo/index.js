const mongoose = require("mongoose");

main()
  .then((result) => {
    // console.log(result)
    console.log("connect to mongodb Success..");
  })
  .catch((err) => {
    console.log(err, "someting wrong");
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    city:String
})
