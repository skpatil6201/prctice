// rest operater can be used to know  the number of value in array of object

//rest it also last parameter madhe use karaycha
// function fun (a,b,...args){
//     console.log(args)

// }
// fun(2,3,4,5,5,6,6,7) // [ 4, 5, 5, 6, 6, 7 ] rahlele sarv value args madhe jatil

// Spread operater


const arr1= [1,2,3,4,5];
const arr2= [6,7,8,91,0];
const res= [...arr1,...arr2];
console.log(res) // [ 1, 2, 3, 4, 5, 6, 7, 8, 91, 0 ] sarv value ekatra keli