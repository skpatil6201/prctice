function ann(str1,str2){
    if(!str1||!str2){
        return false
    }
    const val1= str1.split('').join();
    const val2 = str2.split('').sort();
    console.log(val1,val2)
return val1===val2
}
console.log(ann("tejas","astej"))