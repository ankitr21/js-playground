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

console.log(typeof myObj);
console.log(typeof myFunction);
