// there is speal syntax ..you cet any function as a asynch ...and wait any promises.
// .. await can wait for promise for resolve or reject
// console.log(a)
// StrictMode;

// let a =22;
// // let var s;
// console.log(a()) 

function a(){
    b()
}
function b(){
    a()
}
a()