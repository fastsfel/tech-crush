//SUBSTRING AND SLICE
const str = "Nigeria is awesome"
let extract = str.substring(0, 7)
let awesome = str.slice(11, 18)
let is = str.slice(8, 10)
//console.log(extract)
//console.log(awesome)
//console.log(is)

//SPLIT
//const names = "John,Jane,Doe"
//let arrcomma = names.split(",")
//let joinedspace = arrcomma.join(" ")
//console.log(arrcomma)
//console.log(joinedspace)

const path = "/user/home/docs"  
let spiltby = path.split("/")
//console.log(spiltby)
//console.log(spiltby[2])

//MIX
let email = "user@example.com"
let user = email.split("@example.com")
let domain = email.endsWith(".com")
let aT = email.replace("@" , "AT")
//console.log(user[0])
//console.log(domain)
//console.log(aT)



//NUMBER 1
let numbers = [2, 4, 6, 8, 10];
numbers.forEach(function(numbers){
    console.log(numbers*2)
})
//NUMBER 2
let names = ["Esther!", "John!", "Ada!", "Mike!"];
names.forEach(function(names){
    console.log("Hello " + names)
})
//NUMBER 3
let number = [1, 2, 3, 4, 5];
let square = number.map(function(number){
    return number**2
})
console.log(square)

//NUMBER 4
let price = [100, 200, 300];
let discount = price.map(function(price){
    return price - 10%price 
})
console.log(discount)

//NUMBER 5
let num = [5, 12, 8, 20, 3];
let greater = num.filter(function(num){
    return num > 10
})
console.log(greater)

//NUMBER 6
let age = [15, 22, 17, 30, 18]
let above = age.filter(age=>{
    return age >= 18
})
console.log(above)