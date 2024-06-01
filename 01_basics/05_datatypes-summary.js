// primitive data type

// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

// dynamically typed 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// Reference type (Non-Primitive)

// Array, objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name:"ankit",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
}

// console.log(typeof myObj);
// console.log(typeof myFunction);


// Memory Allocation

// Stack (Primitive), Heap (Non - Primitive)


let myYoutubeName = "hello channel"

let anotherName = myYoutubeName

// copy created so value will not change 
console.log(myYoutubeName)
console.log(anotherName)

let user1 = {
    name:"Ankit",
    place:"Patna",
}

let user2 = user1

user2.name = "Ranu"

// value changed since reference is used
console.log(user1)
console.log(user2)
