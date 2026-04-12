// length of a string
let stringText = "This is a class on string methods"
console.log(stringText.length)


// to uppercase and lower case
let capitalLetter = stringText.toUpperCase()
let smallLeter = stringText.toLowerCase()
console.log(capitalLetter)
console.log(smallLeter)   

//trim, trimStart and trimEnd 
let str = "   Hello, World!  "
let trimmedStr = str.trim() // removes space from front and back
let frontTrimmedStr = str.trimStart() // removes space from only the front of the string 
let endTrimmedStr = str.trimEnd() // removes space from only the end of the string
console.log(trimmedStr)
console.log(frontTrimmedStr)
console.log(endTrimmedStr)  

let signupName = " Esther"
let signinName = "Esther"

if(signupName.trim() === signinName){
    console.log("Welcome back, Esther")
}else {           
    console.log("Invalid Information")
}   

//indexOf and includes
let userEmail = "fastsfel@gmail.com"
let emailIndex = userEmail.indexOf("@") // return data type : number
console.log(emailIndex)

let emailContainsAt = userEmail.includes("@") // return datatype: boolean value
console.log(emailContainsAt)

//startswith and endswith
let userName = "techCrush Felix 6"
let starts = userName.startsWith("techCrush")
console.log(starts)

let ends = userName.endsWith("6") // return data type ; boolean
console.log(ends) 

// slice and substring
let testString = "my name is Esther"
let slicedString = testString.slice(-5)
let substringString = testString.substring(-5)
console.log(slicedString)
console.log(substringString)

//replace and replaceAll
const text = "Felix is a techie, Felix loves coding and Felix loves teaching";
let replacedText = text.replace("Felix", "He")
let replacedAllText = text.replaceAll("Felix", "He")
console.log (replacedText)
console.log (replacedAllText)

