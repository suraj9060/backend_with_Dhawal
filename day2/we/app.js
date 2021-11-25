const express = require("express")

const user = require("/", "user.json");

const app = express()

app.get("/", (req, res) => {
    res.send({user})
})

app.post("/", (req, res) => {
    res.send("newUser")
})

app.listen(2345, function () {
    console.log("liston on port 2345")
})