const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connect with mongodb...");
  })
  .catch((err) => {
    console.let(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/carCompany");
}

const carsSchema = mongoose.Schema({
  company: {
    type: String,
    required: true,
    enum: [
      "tata",
      "maruti&suzuki",
      "mahindra",
      "kia",
      "landrover",
      "toyota",
      "jeep",
    ],
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["suv", "sedan", "hachback", "offroad"],
  },
  price: {
    type: Number,
    required: true,
    default: [300000, "car price is too low"],
  },
  Cname: {
    type: String,
    required: true,
    maxLength: 30,
  },
});

const Car = mongoose.model("Car", carsSchema);

Car.find({price:{$lte:1500000}}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

// Car.findByIdAndUpdate(
//   "66ccbde0c42608fbd3eea33b",
//   {
//     Cname: "mahesh",
//   },
//   { runValidators: true }
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .then((err) => {
//     console.log(err);
//   });

// Car.deleteMany({ category: "offroad" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Car.updateMany({ category: "offroad" }, { name: "defender" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Car.find({ price:{$gte:5000000} })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Car.insertMany([
//   {
//     company: "tata",
//     name: "Nexon",
//     category: "suv",
//     price: 1200000,
//     Cname: "John Doe",
//   },
//   {
//     company: "maruti&suzuki",
//     name: "Swift",
//     category: "hachback",
//     price: 700000,
//     Cname: "Jane Smith",
//   },
//   {
//     company: "mahindra",
//     name: "Thar",
//     category: "offroad",
//     price: 1500000,
//     Cname: "Alice Brown",
//   },
//   {
//     company: "kia",
//     name: "Seltos",
//     category: "suv",
//     price: 1300000,
//     Cname: "Bob Johnson",
//   },
//   {
//     company: "landrover",
//     name: "Defender",
//     category: "offroad",
//     price: 8000000,
//     Cname: "Charlie Lee",
//   },
//   {
//     company: "toyota",
//     name: "Camry",
//     category: "sedan",
//     price: 4000000,
//     Cname: "David Green",
//   },
//   {
//     company: "jeep",
//     name: "Compass",
//     category: "suv",
//     price: 2000000,
//     Cname: "Emily White",
//   },
//   {
//     company: "tata",
//     name: "Harrier",
//     category: "suv",
//     price: 1500000,
//     Cname: "Frank Black",
//   },
//   {
//     company: "maruti&suzuki",
//     name: "Baleno",
//     category: "hachback",
//     price: 800000,
//     Cname: "Grace Blue",
//   },
//   {
//     company: "mahindra",
//     name: "XUV700",
//     category: "suv",
//     price: 1800000,
//     Cname: "Henry Grey",
//   },
//   {
//     company: "kia",
//     name: "Carnival",
//     category: "suv",
//     price: 2500000,
//     Cname: "Isla Yellow",
//   },
//   {
//     company: "landrover",
//     name: "Range Rover",
//     category: "suv",
//     price: 9000000,
//     Cname: "Jack Orange",
//   },
//   {
//     company: "toyota",
//     name: "Fortuner",
//     category: "suv",
//     price: 3500000,
//     Cname: "Katie Red",
//   },
//   {
//     company: "jeep",
//     name: "Wrangler",
//     category: "offroad",
//     price: 6500000,
//     Cname: "Leo Pink",
//   },
//   {
//     company: "tata",
//     name: "Altroz",
//     category: "hachback",
//     price: 800000,
//     Cname: "Maya Purple",
//   },
//   {
//     company: "maruti&suzuki",
//     name: "Dzire",
//     category: "sedan",
//     price: 700000,
//     Cname: "Nina Brown",
//   },
//   {
//     company: "mahindra",
//     name: "Scorpio",
//     category: "suv",
//     price: 1400000,
//     Cname: "Oscar Green",
//   },
//   {
//     company: "kia",
//     name: "Sonet",
//     category: "suv",
//     price: 1200000,
//     Cname: "Paul White",
//   },
//   {
//     company: "landrover",
//     name: "Evoque",
//     category: "suv",
//     price: 6000000,
//     Cname: "Quinn Blue",
//   },
//   {
//     company: "toyota",
//     name: "Innova",
//     category: "suv",
//     price: 1800000,
//     Cname: "Rita Grey",
//   },
//   {
//     company: "jeep",
//     name: "Grand Cherokee",
//     category: "suv",
//     price: 7500000,
//     Cname: "Sam Yellow",
//   },
// ]);

// Car.insertMany([
//   {
//     company: "mahindra",
//     name: "xuv700",
//     category: "suv",
//     price: 3000000,
//     Cname: "sairaj",
//   },
//   {
//     company: "kia",
//     name: "celtos",
//     category: "suv",
//     price: 2000000,
//     Cname: "shrinath",
//   },
//   {
//     company: "tata",
//     name: "tegor",
//     category: "sedan",
//     price: 700000,
//     Cname: "sanket",
//   },
//   {
//     company: "landrover",
//     name: "defender",
//     category: "offroad",
//     price: 10000000,
//     Cname: "tushar",
//   },
//   {
//     company: "toyota",
//     name: "fortuner",
//     category: "suv",
//     price: 5000000,
//     Cname: "suraj",
//   },
// ]);

// const car1 = new Car({
//   company: "tata",
//   name: "harrier",
//   category: "suv",
//   price: 2500000,
//   Cname: "shiv",
// });

// car1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
