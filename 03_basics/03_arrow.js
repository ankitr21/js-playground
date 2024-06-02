const user = {
    username: "Ankit",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  
        console.log(this)
    }
}

// user.welcomeMessage("Ankit")
// user.username = "Ranu"
// user.welcomeMessage()

//console.log(this)  // empty object, while running in browser window object is returned since it is the most global event. here node environmnet is refered 

// function chai(){
//     let username = "ankit"
//     console.log(this.username) // -> this cannot be used inside function 
// }

// const chai = () => { //Arrow functions
//     let username = "Ankit"
//     //console.log(this.username) 
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2    // Implicit return

const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3,4))