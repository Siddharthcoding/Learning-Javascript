let score = "Siddharth"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN(Not a number) still it's type is a number
// true => 1; false => 0

let isLoggedIn = "Siddharth"
let boooleanIsLoggedIN = Boolean(isLoggedIn);

console.log(boooleanIsLoggedIN);

// 1 =>true; 0=> false 
// "" =>false
// "Siddharth" => false

let someNumber = 33
let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);

// ****** Operations ******

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Siddharth"

let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);  //Priority based conversions
// console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);