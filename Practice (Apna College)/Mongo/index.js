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

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  city: String,
});

const User = mongoose.model("User", userSchema);
// const Employee=mongoose.model("Employee",userSchema);

// Update Commands

//find and update

User.findByIdAndUpdate("66cc1c804ab01435447a6167",{email:"maheshp56@outlook.com"},{new:true})
  .then((res) => {
    console.log(res);
  })
  .catch(() => {
    console.log("something wrong");
  });

//new retruns the modify document rather than the old document
// User.findOneAndUpdate({ name: "Sairaj" }, { city: "Pune" }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch(() => {
//     console.log("something wrong");
//   });

// User.updateMany({age:21},{city:"Mumbai"}).then((res) => {
//     console.log(res);
// }).catch(() => {
//     console.log("something wrong");
// });

// User.updateOne({name:"Shubham"},{city:"Pune"}).then((res) => {
//     console.log(res);
// }).catch(() => {
//     console.log("something wrong");
// })

//find by id
// User.findById("66cc1ed14365d4588140f97d").then((res) => {
//     console.log(res);
// }).catch(() => {
//     console.log("something wrong in db");
// })

// find by queery
// User.findOne({age:{$gt:21}}).then((res) => {
//     console.log(res);
// }).catch(() => {
//     console.log("Something wrong in db");
// })

//find all documents
// User.find({}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err,"Something wrong");
// })

//Insert Multiple Data

// User.insertMany([
//   { name: "Sairaj", email: "sairaj48@gmail.com", age: 22, city: "Pune" },
//   { name: "Shrinath", email: "Shris@gmail.com", age: 21, city: "Baramati" },
//   { name: "Rohan", email: "rohansg@outlook.com", age: 21, city: "Phaltan" },
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err, "Something wrong");
//   });

// const user1 = new User({
//   name: "Mahesh",
//   email: "mahesh56@gmail.com",
//   age: 23,
//   city: "Pune",
// });

// const user2 = new User({
//   name: "Samir",
//   email: "samirb54@gmail.com",
//   age: 22,
//   city: "Kolhapur",
// });

// const user3 = new User({
//   name: "Shubham",
//   email: "Shubhama3@gmail.com",
//   age: 20,
//   city: "Phaltan",
// });

//save method returns a promice
// user1.save();
// // user2.save();
// user3
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err, "Someting Wrong");
//   });
