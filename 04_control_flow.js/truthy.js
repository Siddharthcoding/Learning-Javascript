const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//  falsy values :
/* false, 0, -0, BigInt 0n, "", null, undefined, NaN */

// truthy values : 
/* true, "0", "false", " ", [], {}, function(){}  */

// if (userEmail.lcength === 0) {      // to check empty array's condition
//     console.log("Array is empty");
// }

const emptyObj = {}

// Object.keys() returns an array of keys

if (Object.keys(emptyObj).length === 0) {   // to check empty object's condition
    console.log("Object is empty");
}

// false == 0 : true
// false == "" : true
// 0 == "" : true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10  // safety check assigns 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15    // first value i.e. 10 is assigned

console.log(val1);


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");;