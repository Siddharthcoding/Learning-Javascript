const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 176.962
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// ************* Maths *****************

// console.log(Math);
// console.log(Math.abs(-4));   // -ve to +ve
// console.log(Math.round(8.6));
// console.log(Math.ceil(7.2));
// console.log(Math.floor(7.6))l
// console.log(Math.min(4,5,1,9));
// console.log(Math.max(4,5,1,9));

console.log(Math.random());        // value between 0 and 1
console.log((Math.random()*10) +1);   // value between 1 to 9
console.log(Math.floor((Math.random()*10)) +1);  


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // to get value in given range