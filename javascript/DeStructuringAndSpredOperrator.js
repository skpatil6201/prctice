// const [a,b,c]=[1,2,3];
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
// const arr= [1,2,3,3,3,3];
// const [g,d,v,f]=arr;
// console.log(g)
// const [m,n,rest]=arr;
// console.log(m); // 1
// console.log(n); // 2
// console.log(rest); // [3, 3, 3, 3]
// let {r,t}={r:44,t:33}
// console.log(r); // 44
// console.log(t); // 33

// let arrr= [2,3,4];
// let ob = {...arrr};
// console.log(ob)

// function sum (a,b,c){
//     return a+b+c;
// }
// console.log(sum(...arrr))
let obj2 = {
    name:"tejas",
    age:22,
    city:"pune"
}
console.log({...obj2,name:"bhau",age:11})

console.log({name:"bhau",age:11,...obj2})