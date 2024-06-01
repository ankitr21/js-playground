const a1 = ["thor", "ironMan", "spiderMan"]
const a2 = ["shktiman", "naagraj"]

// a1.push(a1)
// console.log(a1);

//console.log(a1[2])

const a3 = a1.concat(a2)
//console.log(a3)

const a4 = [...a1, ...a2] //spread operator
//console.log(a4)

const a5 = [1,2,3,[4,5,6], 7, [6,7,[8,9]]]

//console.log(a5.flat(0)) // flatens the array which contains array in it self at differnt depths. 

console.log(Array.isArray("Ankit"))
console.log(Array.from("Ankit"))
console.log(Array.from({name:"Ankit"}))

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3))