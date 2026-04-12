let numbers = [1, 2, 3, 4, 5]
let doubled = numbers.map(function(double){
    return double *2
})
console.log(doubled)

const scores =[250, 300, 350, 200, 400, 180, 160]
let greater = scores.filter( greater=>{
return greater >= 300
})
console.log(greater)

const sum = [2000, 3000, 400, 180, 100]
let total = sum.reduce(function(accumulator, currentPrice){
    return (accumulator + currentPrice)
}, 0);
console.log(total) 

let fruits = ["mango", "banana", "cashew"]
let endFruit = fruits.pop()
console.log(endFruit)
console.log(fruits)
let newFruit = fruits.push("watermelon")
console.log(fruits)
let frontFruit = fruits.shift()
console.log(fruits)
let addFruit = fruits.unshift("coconut")
console.log(fruits)

const colours = ["blue", "yellow", "red"];
let remove = colours.pop()
console.log(colours)
let addGreen = colours.push("green")
console.log(colours)
