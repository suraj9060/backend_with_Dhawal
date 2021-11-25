// const express = require("express");

// const app = express()

// // app.get("/", (req, res) => {
// //     res.send(" here we go i am done")
// // })

// app.get("", (req, res)=>{
//     var a = {}
//     a.name = "suraj"
//     res.send(a)
// })

// app.listen(9999, () => {
//     console.log("huaa console to chal raha h code")
// })

const express = require("express")
const app = express()
const user = require("./user.json")

app.use(express.json())



app.get("/", (req, res) => {
    res.send({user})
})
// app.post("/", (req, res) => {
//     console.log(req.body)
//    res.send("post is just to cheke file")
// })

app.post("/", (req, res) => {
    var newUser = [...user, req.body]
    res.send(newUser)
})

app.listen(9988, () => {
    console.log("listining on  port 9988")
})