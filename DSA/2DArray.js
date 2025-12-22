



let sum = 0;
let arr = [[1,2,3], [1,2,3],[4,5,6]]
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j]
        console.log(sum)
    }

    console.log("Summ of allement", sum)
    sum=0 // its for row wise addition saparate

}