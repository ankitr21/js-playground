// singleton 
//Object.create

// object literals
// key-value

const mySym = Symbol("key1")

const JsUser = {
    name:"Ankit",
    "city": "patna",
    [mySym] : "myKey1", // using Symbol in key
    age : 25,
    location : "Blr",
    email: "akrranu@gmail.com",
    isLoggedIn: false,
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["city"])
// console.log(typeof JsUser[mySym])

JsUser.email = "ankit@abc.com"
//Object.freeze(JsUser)  // no changes will propogate after freezing the object. Doesn't throws an error. 
JsUser.email = "ranu@abc.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JsUser")
}

JsUser.greeting2 = function(){
    console.log(`Hello JsUser, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())

