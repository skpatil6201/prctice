function LinearSearch(arr,value){
    for(let i =0;i<arr.length;i++){
        if(arr[i]===value) return i+1
    }
}
console.log(LinearSearch([22,33,44,55,66],66))