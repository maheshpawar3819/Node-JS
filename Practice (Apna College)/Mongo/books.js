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
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const booksSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 70,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1,"Price is too low for Amazon selling"], //add custom error
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["tech", "logical", "coading"],
    required: true,
  },
});

const Book = mongoose.model("Book", booksSchema);

// let book9 = new Book({
//   title: "rtificial Intelligence: A Guide for Thinking Humans",
//   author: "Melanie Mitchell",
//   price: 900,
//   discount: 10,
//   category: "tech",
// });

// book9
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//the validations rule are not working on updation
//The all rules are define in schema it will only work on insertion not workon updation
//if you want to work this rules on updation then use {runValidetors:true}

Book.findByIdAndUpdate(
  "66cc8a56ac2c229c85c52022",
  { price: -500 },
  { runValidators: true }
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//   Book.findOneAndDelete({title:"rtificial Intelligence: A Guide for Thinking Humans"}).then((res) => {
//     console.log(res);
//   }).catch((err)  => {
//     console.log(err);
//   })

// Book.findByIdAndUpdate(
//   "66cc92a110375b452fe720e9",
//   {
//     title: "Artificial Intelligence: A Guide for Thinking Humans",
//   },
//   { new: true }
// ).then((res)=> {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// Book.insertMany([
//   {
//     title: "Code: The Hidden Language of Computer Hardware and Software",
//     author: "Charles Petzold",
//     price: 2000,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     price: 1500,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     price: 900,
//   }
// ]);
