function one() {
    console.log("this is one function from third file and working")
}

function two() {
    console.log("this is second function this is also working from third file")
}

var name = "suraj Kumar"
var Number = 47;
var any = name + " " + Number
var sume = any + " "+ one

module.exports={one,two , any ,name , Number,sume}