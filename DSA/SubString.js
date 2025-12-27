
    let arr = []
function getSubstring(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j <= str.length; j++) {
            arr.push(str.substring(i,j))
        }
    }
    console.log("arr",arr)
}
// fun("tejas")
console.log("tejas".substring())