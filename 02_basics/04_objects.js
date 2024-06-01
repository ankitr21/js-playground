// const user = new Object() --> singleton object

const user = {}

user.id = "123"
user.name = "amit"
user.isLoggedIn = false

//console.log(user)

const regUser = {
    userId:"123",
    fullname : {
        userfullname : {
            firstName: "Ankit",
            lastName: "Kumar",
        }
    }
}

// console.log(regUser.fullname.userfullname.lastName)

// optional chaining --> to-do

const obj1  = {1: "a", 2 : "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2}  --> puts obj2 as a nested object inside obj1

// const obj3 = Object.assign(obj1, obj2)   // other syntax const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}  // spread syntax
// console.log(obj3)

console.log(user)

console.log(Object.keys(user))
console.log(Object.values(user))

console.log(Object.entries(user))

console.log(user.hasOwnProperty('isLoggedIn'))