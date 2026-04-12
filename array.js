let item1 = "milk"
let item2 = "milo"
let item3 = "rice"

let items = ["milk", "milo", "rice" , 1, 2, 4, true ]
console.log(items[0])
console.log(items.length)

//forEach
let fruits = ["apple" , "banana" , "orange" , "watermelon" , "pawpaw"]
let names = ["felix", "jess" , "mark" , "smith" , "doe"]

fruits.forEach(function(fruits){
    console.log("i like to eat " +  fruits)
})

names.forEach(function(names){
    //console.log("TECH_CRUSH_2026_COHORT_6 "  + names)
})

// map methods
let scores = [90, 80, 70, 60, 50]
let newScores = scores.map(newScores =>{
    //console.log("as a good teacher, i decided to add 5 marks to all my students ")
    return newScores + 5
}) //arrow function
//console.log(newScores) 

let newScore = scores.map(function(newScore){
    console.log("as a good teacher, i decided to add 5 marks to all my students ") //function method   
    return  newScore + 5
})
console.log(newScore)

let cars = ["benz", "toyota" , "honda", "hyundai"]
let ride = cars.map(ride =>{
    return "Felix is buying a new " + ride
})
console.log(ride)

cars.forEach(function(cars){
     console.log("Felix is a buying a new " + cars)
})
 


let students = ["felix", "jess" , "mark" , "smith" , "doe"]
let Tag = students.map(function(Tag){
    return "You must be good at tech " + Tag 
})
//console.log(Tag)
 
let Tg = students.map(students=>{
    return "You must be good at tech " + students
})
console.log(Tg) 


//FILTER METHOD
let jambscore = [200, 250, 300, 150, 180, 280, 290, 100]
let passed = jambscore.filter(jambscore=>{
    return jambscore >= 200
})
console.log(passed)

let ages = [18, 25, 30, 15, 20, 35, 40]
let adults = ages.filter(function(ages){
    return ages >= 18
})
console.log(adults)

//FIND
const studentsNames = ["john",  "john", "Ada", "doe", "jane", "smith", "Bola", "john"]
const found = studentsNames.find(name =>{
    return name === "john"
})
console.log(found) 

//REDUCE
let cartPrices = [1500, 800, 2200, 450, 1000];
let total = cartPrices.reduce(function(accumulator, currentPrice){
    return accumulator + currentPrice
}, 1000);
console.log(total)

//Arrow function version
let grandTotal = cartPrices.reduce ((acc, price) =>{
    return acc + price
}, 0);
console.log(grandTotal);

//push, pop, shift, unshift
let colors = ["red", "blue", "green"];
colors.push("yellow")

let lastColor = colors.pop();
console.log(colors);
console.log(lastColor);
let firstColor = colors.shift();
console.log(colors);
console.log(firstColor);  

let newLength = colors.unshift("purple")
console.log(colors);
console.log(newLength)

