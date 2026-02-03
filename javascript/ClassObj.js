// //proto type
// const student = {
//     name: "tejas",
//     age: 22,
//     name: () => {
//     },
//     second: function () {
//         name: this.name
//     }
// }
// const datas = {
//     name: "tejas ",
//     middle: "harne"
// }
// student.__proto__ = datas
// console.log(JSON.stringify(student))

// class
// class tejas {
//     name = 'tejas'
//     constructor(nameee) {
// console.log(nameee)
//     }

//     start(brand) {
// // name= "Dssdsd"
//         console.log("Start", this.name,brand)
//     }
//     end() {
//         console.log("end", this.name)
//     }
// }
// let obj = new tejas("Ddwqdsqwew")
// obj.start("bhau")
// console.log(obj.end())
// obj.start();


// inherient

// class tej {
//     hello() {
//         this.name = 'tejas'
//         console.log(this.name)
//     }
// }

// class tejas extends tej {
// hello(){
//     this.name= "DAAsasasas";
//     console.log(this.name)
// }
// }
//     let name= new tejas()
// name.hello()

// METHOD OVERRADDING

// IF SAME METHOD IN PARANT AND CHILD THEN that called method overadding ... that time they can show output of child class


// super 

// / super key word is used to call parent  class variabl or Object, method


class fn {
    constructor(name) {
        // super()
        this.name = name
    }
}
class fun extends fn {
    constructor(datas) {
        super(datas)
        this.datas = datas
    }
}

let obj= new fun("Sds")
console.log(obj)