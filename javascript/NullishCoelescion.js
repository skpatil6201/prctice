// problem 
// function fun(data) {
//     let res = data || "bhau "
//     console.log(res)
// }

// fun(0)// its return bhu  if we use nullish coelesion that not show bhau its show 0 .


function fun (data){
let res= data  ?? "bhau"
console.log(res)
}
fun(0)