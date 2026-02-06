let summ = 0;

function sum(value){
    for(let i = 0; i < value.length; i++){
        summ += value[i];
    }
}



console.time();
sum([1,2,3,4,5,6,7,8,9,10]);
console.timeEnd();