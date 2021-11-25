var express = require("express")

var users = require("./user.json")
var app = express()

app.get("/", (req, res) => {
    res.send("cheking")
})



app.listen(2346, () => {
    console.log("listen on port 2345")
})