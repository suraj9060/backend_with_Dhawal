// const express = require("express")

// const user = require("/", "user.json");

// const app = express()

// app.get("/", (req, res) => {
//     res.send({user})
// })

// app.post("/", (req, res) => {
//     res.send("newUser")
// })

// app.listen(2345, function () {
//     console.log("liston on port 2345")
// })


var express = require("express")
var app = express()
var movie = require("./movie.json")

app.use(express.json())

app.get("/", (req, res) => {
    res.send({movie})
})

app.post("/", (req, res) => {
    // req.body{[]}
})

app.listen(9000, () => {
    console.log("listening on port 9000")
})