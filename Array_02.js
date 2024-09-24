function evenArray (arr){
    return arr.filter((num) => num % 2 === 0)
}
const array = [33, 44, 55, 66, 67, 77, 88, 99, 100]
console.log(evenArray(array))