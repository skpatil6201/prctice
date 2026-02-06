let obj ={
    name:"tejas",
    middle:"harne"
}


// const obj1 = {
//   name: "Tejas",
//   address: { city: "Pune" }
// };

// const obj2 = { ...obj1 }; // shallow copy

// obj2.address.city = "Mumbai";

// console.log(obj1.address.city);

// const Shallowcoppy1={...obj}
// Shallowcoppy1.name="fdsds"

// console.log(obj)
// console.log(Shallowcoppy1)



// deep copy ff
// const Shallowcoppy = Object.assign({},obj,obj);
// Shallowcoppy.name="fdsds"

// const deep = structuredClone(obj);
//  deep.name="bhau "
//  console.log(obj)
//  console.log(deep)

const obj1 = {
  name: "Tejas",
  address: { city: "Pune" }
};

const obj2 = JSON.parse(JSON.stringify(obj1));

obj2.address.city = "Mumbai";

console.log(obj1.address.city);ch