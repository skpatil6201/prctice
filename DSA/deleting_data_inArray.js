let arr = [22, 33, 11, 22, 33, 499, 499];
// arr.shift(); // delete the first element of array
// console.log(arr)
// arr.pop();  // delete last index of array
// console.log(arr)
// arr.splice(2,4); // index and total delete elements
// console.log(arr)
// let vatuee = arr.indexOf(499);// find the index base on value

// if(vatuee !== -1) {
//     arr.splice(vatuee,1)
// }

// console.log(vatuee)
const value=499;
const fiterData= arr.filter(data=>data===value);
console.log(fiterData)