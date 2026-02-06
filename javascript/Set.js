// set is a unique collection of values, meaning that no two values can be the same. It is similar to an array, but it does not allow duplicate values and does not maintain the order of elements.

const arr =[1,2,3,4,5,5,6,6,7,7,7,8,9];

const nesSet= new Set(arr);
nesSet.add(10)
nesSet.delete(3)

// console.log("our set is ",  nesSet.has(11));
console.log(Array.from(nesSet));

