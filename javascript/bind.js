let ob = {
    name: "Fde",

}
let fun = function () {
    console.log("name is ", this.name)
}

let obj = {
    name: "bhau tejas "
};

// ob.fun.call(obj)

fun.call(ob)
fun.call(obj)