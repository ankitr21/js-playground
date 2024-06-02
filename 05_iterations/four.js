const myObject = {
    js : 'Javascript',
    cpp : 'C++',
    rb: 'ruby'
}

for (const key in myObject) {
    console.log(myObject[key])
}

let myArray = ['flash', "batman", "superman"]

for (const i in myArray) {
    console.log(i)
}