const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userModel = require('./models/Item.js');



app.use(cors({ 
              origin: 'http://172.20.10.8:3000',
              methods: ["GET","POST","PUT","DELETE"]
            }));

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/memo");

app.get("/getUsers", async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
