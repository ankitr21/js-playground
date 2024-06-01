const myArray = [0,1,2,3,4,5]
const myHeroes = ["shaktiman", "naagraj"]

const myArray2 = new Array(1,2,3,4)
//console.log(myArray2[1])


//  ***************** Array methods ********************

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9) // time consuming
// myArray.shift()

// console.log(myArray.includes(9))
// console.log(myArray.indexOf(3))

// const newArr = myArray.join()
// console.log(newArr)

// console.log(myArray)

//slice , splice

console.log("A ", myArray);
const myn1 = myArray.slice(1,3)

console.log(myn1)
console.log("B ", myArray)

const myn2 = myArray.splice(1,3)
console.log(myArray)
console.log(myn2)

// slice doesn't manipulate the array but splice manipulate the array. It removes the range both end included from the original array. 