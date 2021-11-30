const express = require("express")
const app = express()
const user = require("./user.json")
app.use(express.json())

app.get("/",(req, res)=>{
    res.send({user})
})

app.post("/", (req, res) => {
    req.body
})

app.listen(2222, ()=>{
    console.log("listening on port 2222")
})