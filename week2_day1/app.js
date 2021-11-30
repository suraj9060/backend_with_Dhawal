const express = require("express");
const mongoose = require("mongoose");
// var user = require("./user.json")
const app = express();

app.use(express.json());
// step 1 to connect mongoose to mongo db
const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/test");
};

// step 2 is to create schema for blue print
const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },

  last_name: { type: String, required: false },

  gender: { type: String, required: false, default: "male" },

  age: { type: Number, required: true },

  email: { type: String, required: true },
});

//step 3 is to create model for schema and create directory for schema
var User = mongoose.model("user", userSchema);

// here i will create our crud operations

// post method
app.post("/users", async (req, res) => {
  const user = await User.create(req.body);

 return res.status(201).send(user);
});

app.get("/users", async (req, res) => {
  const user = await User.find();

  return res.status(200).send(user);
});

app.patch("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  return res.status(200).send(user);
});

app.delete("/users/:id", async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)

    return res.status(200).send(user)
})
app.listen(2344, async () => {
  connect();
  console.log("port 2344");
});

