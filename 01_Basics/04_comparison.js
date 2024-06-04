// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

//Avoid these type of conversions
console.log(null > 0);
console.log(null >= 0);
console.log(null == 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//Comparison and equality check work differently

console.log("2" === 2);   //strict check , check value and datatype both

