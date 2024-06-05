const name = "Siddharth"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Siddharth-js-com')    //an object 

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4)    // Ignores -ve values 
console.log(newString);

const anotherString = gameName.slice(-12, 5)   // Starts from back
console.log(anotherString);

const newStringOne = "   Siddharth    "
console.log(newStringOne);
console.log(newStringOne.trim());     // Removes starting and end spaces

const url = "https://siddharth.com/siddharth%20js"

console.log(url.replace('%20', '-'));

console.log(url.includes('siddharth'));

console.log(gameName.split('-'));