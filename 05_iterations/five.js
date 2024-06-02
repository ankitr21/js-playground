const coding = ["js","ruby","java","c++"]

// coding.forEach( function (item) { 
//     console.log(item)
// } )

// coding.forEach((item) => {
//     console.log(item)
// })

// function printME(item){
//     console.log(item)
// }

// coding.forEach(printME)  // reference of the functionis given not the execution 

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )