import React, { useState, useEffect } from "react";
import axios from "axios";

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userModel = require('./models/Users.js'); // Assurez-vous que le modèle est correctement importé

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
  console.log("Server running");
});

mongoose.connect("mongodb://localhost:27017/testbdd");

app.get("/getUsers", async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
      .then(response => setUsers(response.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <h3 key={user._id}>{user.username}</h3>
      ))}
    </div>
  );
}

export default App;