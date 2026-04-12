let obj = {
    name: "Ubah Felix",
    age: 31,
    department: "Pure and Industrial Chemistry",
    isEnrolled: true
    
};
console.log (obj.name)
console.log(obj["age"]) 

let student = {
    name: "Ngozi Adeyemi",
    age: 25,
    department: "Micro Bioogy",
    isEnrolled: true
};

let employee = {
name: "Tunde Onakoya",
role: "Fullstack Developer",
salary: 500000,
city: "Lagos"
};

let newName = employee.name
let newRole = employee.newRole

const {name, salary, role} = employee
//console.log(name)
//console.log(role)

let courses = {
    CHM260: "Organic Chemistry",
    CHM250: "Physical Chemistry",
    CHM460: "Organic Chenmistry II"
};

let {CHM460 : CHM461} = courses;
console.log(CHM461)  


let profile = {name: "Ada", age: 22};
let updatedProfile = {
    ...profile,
    city: "Abuja"
};
//console.log(updatedProfile)

const user = {
    name: "Esther",
    password: "12345",
    isFemale:  true,
    city: "Lagos",
    age: 25   
}

console.log(Object.keys(user))
console.log(Object.values(user))         
console.log(Object.entries(user))

//for in loop METHOD
for(let key in user){
    console.log(key)
    //console.log (user[key])// a manipulative for in method that gives the values of an object a for of function is designed for
}
