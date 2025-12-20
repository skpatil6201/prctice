
// let name = "bhau"
// class nam {
//     tej(name) {
//         this.name = name
//         console.log("in tej function ", name)
//     }
//     cancle(name) {
//         this.name = name
//         console.log("in cancle", name)
//     }
//     constructor(name ,age , address){

//     }
// }


// let namee = new nam();

// namee.tej("tejas")

// namee.cancle("harne")

const obj1 ={a:2,b:3,c:4,d:4
}

const obj2 ={e:2,f:4}
// const result ={...obj1,...obj2}
// console.log(result)

const result = Object.assign({},obj1,obj2)
console.log(result)
result.name= obj1.a,obj2
console.log(result.name)