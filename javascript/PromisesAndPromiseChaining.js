const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(22);
        // reject(22)
    }, 2000);
});

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("p2 resolved");
//     }, 2000)

// })

// p1.then((data)=>{
//     console.log("data",data)
//     return data
// })
// .catch((err)=>{
//     setTimeout(() => {
//         console.log("err",err)
//     }, 3000);
// })
// .then((value)=>{
//     console.log("finally executed",value)
//     return value
// })
// .then((value)=>{
//     console.log("value",value)
// })

