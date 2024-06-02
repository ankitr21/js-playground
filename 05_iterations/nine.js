// reduce

const mynums = [1,2,3]

// const mytotal = mynums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`)
//     return acc + currVal
// }, 0)

const mytotal = mynums.reduce( (acc, curVal) => acc + curVal, 0 )

console.log(mytotal)

const shoppingCart = [
    {
        itemname: "Js course",
        price: 78787
    },
    {
        itemname: "cpp",
        price: 787
    },
    {
        itemname: "python",
        price: 2343
    },
    {
        itemname: "data science",
        price: 7832
    },{
        itemname: "Machine learning",
        price: 8989
    }
]

const totalVal = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalVal)