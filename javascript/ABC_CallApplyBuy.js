// let obj = {
//     name: "Tejas",
//     age: 24,
    
//     getDetails: function (c) {
//         console.log("sdsd")
//     }

// }

// let a= Symbol("id")

// let b= Symbol("id")

// console.log(a===b)

// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }
// function fun (){
//     console.log("teja s")
// }

// function sayBye() {
//   console.log("Bye!");
// }

// greet("Tejas", sayBye);


// new Promise((resolve,reject)=>{
//     reject("succeess");
// })

// .then((data)=>{
//     console.log(data)
// })

// .catch((err)=>{
//     console.log("error   "+ err)
// })

// .finally(()=>{
//     console.log("finnally ....!")
// })

// setInterval(()=>{
//     console.log("set time out")
// },0)

setTimeout(()=>{
    console.log("set time out")
},0)

setImmediate(()=>{
    console.log("set immediate")
})
Promise.resolve().then(()=>{
    console.log("promise resolved")
})