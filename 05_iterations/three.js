// for of

const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello world"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`)
// }

const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "United states of America")

//console.log(map)

// for (const key of map) {
//     console.log(key)
// }

for (const [key, value] of map) {
    console.log(key)
}