// function test() {
//     console.log("test")
// }

// var first = require("./first")
// var second = require("./secong")

// // this is method one
// // var third = require("./third")

// // console.log(third);
// // third.one();
// // console.log(third.two());

// // second();
// // first();

// // console.log(third.any);
// // console.log(third.Number);
// // console.log(third.name);
// // console.log(third.sume);
 

// // this is method second // object destructuring
// var { one, two, any, name, Number, sume } = require("./third")
// one()
// two()
// console.log(any)
// console.log(name)
// console.log(Number)
// console.log(sume)






// emitter start from here

var EventEmitter = require("events")
// console.log(EventEmitter)

var register = require("./ragisterEmitter")
var welcome = require("./welcomeEmitter")

var eventEmitter = new EventEmitter()
// console.log(eventEmitter)

var user = () => {
    eventEmitter.on("user", register);
    eventEmitter.on("user", welcome);
    
    eventEmitter.emit("user", { name: "suraj Kumar" });
   
}

  user()







// const authorise = (permission) => {
//   return (req, res, next) => {
//     const originalSendFunc = res.send.bind(res);
//     res.send = function (body) {
//       body.name = "Nrupul Dev";
//       console.log(body); // do whatever here
//       return originalSendFunc(body);
//     };
//     next();
//   };
// };
