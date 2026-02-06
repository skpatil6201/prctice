// expression1|| expression
// expression1 is true .valueOf.return expression1 ..otherwisereturn expression2

const exp1 = true;
const res= expr1 || "Hello World";
console.log(res); // true


//  expression1 && expression2
// if expression1 is false return expression1 ..otherwisereturn expression2

const exp = true;
const res1= exp && "Hello World";
console.log(res1); // Hello World

// nullish coalescing operator (??)
// expression1 ?? expression2
// if expression1 is not null or undefined return expression1 ..otherwisereturn expression2
const expn = null;
const res2= expn ?? "Hello World";
console.log(res2); // Hello World

// const expn1 = 0;
// const res3= expn1 ?? "Hello World";
// console.log(res3); // 0

// const expn2 = false;
// const res4= expn2 ?? "Hello World";
// console.log(res4); // false