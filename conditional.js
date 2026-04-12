// if-else statements
let userAge = 21
if(userAge >=18){
    console.log("welcome to club 9ja")
}else {
    console.log("sorry, you are not allowed")
}
// if-else if statements
let gender = "female" 
if( gender === "female"){
    console.log("welcome to the ladies section")
}else if (gender === "male"){
    console.log("welcome to the male section")
}else if (gender === "other"){   
    console.log( "welcome to other section")
}else {
    console.log("we do not know where you belong")
} 

let username = "Felix"
let password = "password123"

if(username === "Felix" && password ==="password123"){
    console.log("login sucessful")
}else if (username === "Felix" || password === "password123"){
    console.log("username or password is correct")
}else{
    console.log ("login failed")
}

let votersAge =18
if(votersAge ===18){
    console.log("eligible to vote")
}else if (votersAge => 18){
    console.log("eligible to vote")
}else {
    console.log("not eligible to vote")
}   