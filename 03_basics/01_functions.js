// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);  
// }

function addTwoNumbers(number1, number2){
    // let result = (number1 + number2);  
    // return result;

    return number1 + number2
}

const result = addTwoNumbers(3,5)

//console.log(result)

function loginUserMessage(username = "SAM"){
    if(!username){
        console.log("please enter username")
        return;
    }
    return `${username} Just logged In`
}


//console.log(loginUserMessage("hitesh"));
//console.log(loginUserMessage("Ankit"));

function calculateCartPrice(val1, val2, ...num1){ //rest operator val1 -> first value, val2 -> second value, num1 -> rest all values
    return num1;
}

//console.log(calculateCartPrice(200,300,400, 8587, 875, 904))

const user = {
    username: "Ankit",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.username}`)
}

handleObject(user)