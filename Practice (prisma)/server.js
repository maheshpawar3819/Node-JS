require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const { parse } = require("dotenv");
const prisma = new PrismaClient();

//middlwares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//routes
//Create user
app.post("/createu", async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: `user not created someting wrong` });
  }
});

//Show all users

app.get("/users", async (req, res) => {
  try {
    const allusers = await prisma.user.findMany();
    res.status(200).json(allusers);
  } catch (error) {
    res.status(500).json({ msg: `internal server error` });
  }
});

//Show user by id
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ msg: `sorry user not found` });
    }
  } catch (error) {
    res.status(500).json({ msg: `internal server error` });
  }
});

//Update user by id

app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { name, email },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: `internal server error` });
  }
});

//Delete user by id

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ msg: `user delete successfully` });
  } catch (error) {
    res.status(500).json({ msg: `internal server error` });
  }
});

//Server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server was listning on port : ${port}`);
});
