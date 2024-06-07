const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Superman", "Batman", "Ironman"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]);

// Array methods

// myArr.push(6);
// myArr.push(7);          // insert at last
// myArr.pop();            // remove from last

// myArr.unshift(9)            // insert at start, shift to right
// myArr.shift()               // shifts every element to left

// console.log(myArr.includes(9));      // find if element exists
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();            // converts it into string

// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ",myArr);

const myn1 = myArr.slice(1, 3);   // doesn't manipulate original array & last range is excluded

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1, 3);   // manipulates original array & last range is included
console.log("C ",myArr);
console.log(myn2);

