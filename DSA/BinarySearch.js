
function BinarySearch(arr, target) {
    let start = 0;
    let end = arr.length;

    while (start <= end) {
        let mid = Math.floor(end / 2)
        if (arr[mid] === target) {
            return mid
        }
        if (target < arr[mid]) end = mid - 1
        else start = mid + 1
    }
return -1
}

console.log(BinarySearch([22,33,44,55,66,77,88,99],77))