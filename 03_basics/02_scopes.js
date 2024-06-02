// let a = 10
// const b = 20
// var c = 30

let a = 300

// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log(a)
// }

//console.log(a)
//console.log(b)
//console.log(c) // problem in using var keyword
//console.log(a)

function one(){
    const username = "Ankit"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}

//one()

if(true){
    const username = "Ankit"
    if(username === "Ankit"){
        const website = " Youtube"
        //console.log(username + website)
    }
    //console.log(website)
}

// *************** interesting *******************
addOne(5) // it can be used
function addOne(num){
    return num + 1
}

addOne(5)

//addTwo(5)  --> cannot be used before declaration (to-do hoisting)

const addTwo = function(num){
    return num + 2
}

addTwo(5)