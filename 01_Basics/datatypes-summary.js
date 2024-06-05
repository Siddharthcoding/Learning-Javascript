/* Based on how data is stored and accessed from memory : 
primitive and non primitive datatypes
*/

// Primitive(call by value)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 346898715273926n



// Non Primitive(reference type)
// Arrays, Objects, Functions

const heros = ["shaktiman", "superman", "batman"]

let myObj = {
    name: "Siddharth",
    age: 22,
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);



//***************************** 

// Stack(Primitive) - Variable copy, Heap(Non-Primitive) - refrence of original value

let myName = "Siddharth"
let anotherName = myName
anotherName = "Sid"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    up: "user@ybi",
}

let userTwo = userOne

userTwo.email = "usertwo@google.com"

console.log(userOne.email);
console.log(userTwo.email);